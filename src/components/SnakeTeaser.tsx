"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const DESKTOP_SIZE = 80;
const MOBILE_SIZE = 48;
const HOLD_DURATION = 1350; // 1.35 seconds
const PREVIEW_GRID = 10;
const PREVIEW_SPEED = 150;

export default function SnakeTeaser({ variant = "default" }: { variant?: "default" | "footer" }) {
    const router = useRouter();
    const pathname = usePathname();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [isPressing, setIsPressing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const widgetSize = variant === "footer" ? MOBILE_SIZE : (isMobile ? MOBILE_SIZE : DESKTOP_SIZE);
    const progressRef = useRef(0);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipText, setTooltipText] = useState("hold...");
    const progressStartTimeRef = useRef<number | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    // Snake Preview Logic (Non-interactive)
    const [snake, setSnake] = useState([
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
    ]);
    const [dir, setDir] = useState({ x: 1, y: 0 });

    // Looping movement for preview
    useEffect(() => {
        const move = () => {
            setSnake((prev) => {
                let nextDir = dir;
                const head = prev[0];

                // Simple rectangular path logic
                if (head.x >= PREVIEW_GRID - 2 && dir.x === 1) nextDir = { x: 0, y: 1 };
                else if (head.y >= PREVIEW_GRID - 2 && dir.y === 1) nextDir = { x: -1, y: 0 };
                else if (head.x <= 1 && dir.x === -1) nextDir = { x: 0, y: -1 };
                else if (head.y <= 1 && dir.y === -1) nextDir = { x: 1, y: 0 };

                if (nextDir !== dir) setDir(nextDir);

                const newHead = { x: head.x + nextDir.x, y: head.y + nextDir.y };
                const newSnake = [newHead, ...prev];
                newSnake.pop();
                return newSnake;
            });
        };

        const interval = setInterval(move, PREVIEW_SPEED);
        return () => clearInterval(interval);
    }, [dir]);

    // Render Preview
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, widgetSize, widgetSize);

        // Subtle grid
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 1;
        const unit = widgetSize / PREVIEW_GRID;
        for (let i = 0; i < PREVIEW_GRID; i++) {
            ctx.beginPath(); ctx.moveTo(i * unit, 0); ctx.lineTo(i * unit, widgetSize); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i * unit); ctx.lineTo(widgetSize, i * unit); ctx.stroke();
        }

        ctx.fillStyle = "white";
        snake.forEach(s => {
            ctx.fillRect(s.x * unit + 1, s.y * unit + 1, unit - 2, unit - 2);
        });
    }, [snake, widgetSize]);

    // Long-press logic
    const startHold = useCallback(() => {
        setIsPressing(true);
        setShowTooltip(false);
        progressStartTimeRef.current = Date.now();

        const updateProgress = () => {
            if (!progressStartTimeRef.current) return;
            const elapsed = Date.now() - progressStartTimeRef.current;
            const p = Math.min(elapsed / HOLD_DURATION, 1);
            setProgress(p);
            progressRef.current = p;

            if (p < 1) {
                animationFrameRef.current = requestAnimationFrame(updateProgress);
            } else {
                router.push("/snake");
            }
        };

        animationFrameRef.current = requestAnimationFrame(updateProgress);
    }, [router]);

    const stopHold = useCallback(() => {
        if (progressRef.current > 0 && progressRef.current < 1) {
            setTooltipText("hold more..!");
            setShowTooltip(true);
        }
        setIsPressing(false);
        setProgress(0);
        progressRef.current = 0;
        progressStartTimeRef.current = null;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    }, []);

    // Render discrete progress
    const STEPS = 12; // Number of "ticks" for the border progress
    const discreteProgress = Math.floor(progress * STEPS) / STEPS;
    const perimeter = widgetSize * 4;

    if (!mounted || pathname !== "/") return null;

    if (variant === "footer") {
        return (
            <div
                className="md:hidden absolute top-2 right-0 z-10 pointer-events-auto"
                onPointerDown={(e) => {
                    if (e.pointerType === 'touch') {
                        // @ts-expect-error: releasePointerCapture is not always available
                        e.target?.releasePointerCapture(e.pointerId);
                    }
                    startHold();
                }}
                onPointerUp={stopHold}
                onPointerCancel={stopHold}
                onContextMenu={(e) => e.preventDefault()}
            >
                {/* Tooltip */}
                {showTooltip && !isPressing && (
                    <div className={`${pressStart2P.className} absolute bottom-full right-0 mb-2 px-2 py-1 bg-black border border-white text-white text-[8px] whitespace-nowrap z-10`}>
                        {tooltipText}
                    </div>
                )}

                {/* Widget Container */}
                <div
                    className={`relative bg-black transition-transform duration-100 ${isPressing ? 'scale-110' : 'scale-100'} border border-zinc-900 shadow-[0_0_0_1px_black]`}
                    style={{ width: widgetSize, height: widgetSize }}
                >
                    <canvas ref={canvasRef} width={widgetSize} height={widgetSize} className="block w-full h-full" style={{ imageRendering: "pixelated" }} />
                    {isPressing && (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white" viewBox={`0 0 ${widgetSize} ${widgetSize}`}>
                            <rect x="1" y="1" width={widgetSize - 2} height={widgetSize - 2} fill="none" strokeWidth="2" strokeDasharray={`${discreteProgress * perimeter} ${perimeter}`} strokeLinecap="square" style={{ transition: 'none' }} />
                        </svg>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div
            className="hidden md:block fixed bottom-8 right-12 z-[9999] group pointer-events-auto"
            onMouseEnter={() => {
                if (!isPressing) {
                    setTooltipText("hold...");
                    setShowTooltip(true);
                }
            }}
            onMouseLeave={() => {
                setShowTooltip(false);
                stopHold();
            }}
            onPointerDown={(e) => {
                if (e.pointerType === 'touch') {
                    // @ts-expect-error: releasePointerCapture is not always available
                    e.target?.releasePointerCapture(e.pointerId);
                }
                startHold();
            }}
            onPointerUp={stopHold}
            onPointerCancel={stopHold}
            onContextMenu={(e) => e.preventDefault()}
        >
            {/* Tooltip */}
            {showTooltip && !isPressing && (
                <div className={`${pressStart2P.className} absolute bottom-full left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 mb-3 px-2 py-1 bg-black border border-white text-white text-[8px] whitespace-nowrap z-10`}>
                    {tooltipText}
                </div>
            )}

            {/* Widget Container */}
            <div
                className={`relative bg-black transition-transform duration-100 ${isPressing ? 'scale-110' : 'scale-100'} border border-zinc-900 shadow-[0_0_0_1px_black]`}
                style={{ width: widgetSize, height: widgetSize }}
            >
                <canvas ref={canvasRef} width={widgetSize} height={widgetSize} className="block w-full h-full" style={{ imageRendering: "pixelated" }} />
                {isPressing && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white" viewBox={`0 0 ${widgetSize} ${widgetSize}`}>
                        <rect x="1" y="1" width={widgetSize - 2} height={widgetSize - 2} fill="none" strokeWidth="2" strokeDasharray={`${discreteProgress * perimeter} ${perimeter}`} strokeLinecap="square" style={{ transition: 'none' }} />
                    </svg>
                )}
                {!isPressing && (
                    <>
                        <div className="absolute top-0 left-0 w-1 h-1 bg-zinc-700" />
                        <div className="absolute top-0 right-0 w-1 h-1 bg-zinc-700" />
                        <div className="absolute bottom-0 left-0 w-1 h-1 bg-zinc-700" />
                        <div className="absolute bottom-0 right-0 w-1 h-1 bg-zinc-700" />
                    </>
                )}
            </div>
            <style jsx>{`
                div {
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    user-select: none;
                    touch-action: none;
                    cursor: crosshair;
                }
            `}</style>
        </div>
    );
}
