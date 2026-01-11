"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const UNIT_SIZE = 24;
const INITIAL_SPEED = 120;

export default function SnakePage() {
    const router = useRouter();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gridDim, setGridDim] = useState({ w: 0, h: 0 });
    const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
    const [food, setFood] = useState({ x: -1, y: -1 });
    const [direction, setDirection] = useState({ x: 0, y: -1 });
    const [nextDirection, setNextDirection] = useState({ x: 0, y: -1 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const snakeRef = useRef(snake);
    const foodRef = useRef(food);

    // Sync refs with state for the logic loop
    useEffect(() => {
        snakeRef.current = snake;
        foodRef.current = food;
    }, [snake, food]);

    // Handle Fullscreen & Body Styles
    useEffect(() => {
        const docEl = document.documentElement;
        const originalStyle = document.body.style.cssText;

        // Apply global-like styles to body
        document.body.style.background = "black";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.overflow = "hidden";

        const enterFullscreen = async () => {
            try {
                if (!document.fullscreenElement) {
                    await docEl.requestFullscreen().catch(() => { });
                }
            } catch (err) {
                console.error("Fullscreen error:", err);
            }
        };

        const handleResize = () => {
            const w = Math.floor(window.innerWidth / UNIT_SIZE);
            const h = Math.floor(window.innerHeight / UNIT_SIZE);
            setGridDim({ w, h });

            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        enterFullscreen();
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.cssText = originalStyle;
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => { });
            }
        };
    }, []);

    const getRandomFood = useCallback((currentSnake: { x: number; y: number }[], w: number, h: number) => {
        if (w <= 0 || h <= 0) return { x: 5, y: 5 };
        let newFood: { x: number; y: number } | undefined;
        let attempts = 0;
        while (attempts < 1000) {
            const candidate = {
                x: Math.floor(Math.random() * w),
                y: Math.floor(Math.random() * h),
            };
            const isOnSnake = currentSnake.some((s) => s.x === candidate.x && s.y === candidate.y);
            if (!isOnSnake) {
                newFood = candidate;
                break;
            }
            attempts++;
        }
        return newFood || { x: 0, y: 0 };
    }, []);

    const resetGame = useCallback(() => {
        if (gridDim.w <= 0) return;
        const startX = Math.floor(gridDim.w / 2);
        const startY = Math.floor(gridDim.h / 2);
        const initialSnake = [
            { x: startX, y: startY },
            { x: startX, y: startY + 1 },
            { x: startX, y: startY + 2 },
        ];
        snakeRef.current = initialSnake;
        setSnake(initialSnake);
        setDirection({ x: 0, y: -1 });
        setNextDirection({ x: 0, y: -1 });
        setGameOver(false);
        setScore(0);
        const initialFood = getRandomFood(initialSnake, gridDim.w, gridDim.h);
        foodRef.current = initialFood;
        setFood(initialFood);
    }, [gridDim, getRandomFood]);

    // Initial spawn
    useEffect(() => {
        if (gridDim.w > 0 && food.x === -1) {
            resetGame();
        }
    }, [gridDim, resetGame, food.x]);

    // Input Handling (Keyboard + Swipe)
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
                e.preventDefault();
            }

            if (gameOver) {
                if (e.key === "Enter" || e.key === " ") resetGame();
                return;
            }

            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => { });
            }

            switch (e.key) {
                case "ArrowUp": if (snakeRef.current[0].y === snakeRef.current[1]?.y + 1 || direction.y === 1) break; setNextDirection({ x: 0, y: -1 }); break;
                case "ArrowDown": if (snakeRef.current[0].y === snakeRef.current[1]?.y - 1 || direction.y === -1) break; setNextDirection({ x: 0, y: 1 }); break;
                case "ArrowLeft": if (snakeRef.current[0].x === snakeRef.current[1]?.x + 1 || direction.x === 1) break; setNextDirection({ x: -1, y: 0 }); break;
                case "ArrowRight": if (snakeRef.current[0].x === snakeRef.current[1]?.x - 1 || direction.x === -1) break; setNextDirection({ x: 1, y: 0 }); break;
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => { });
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!touchStartRef.current) return;
            const touchEnd = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
            const dx = touchEnd.x - touchStartRef.current.x;
            const dy = touchEnd.y - touchStartRef.current.y;

            const absX = Math.abs(dx);
            const absY = Math.abs(dy);

            if (Math.max(absX, absY) > 20) {
                if (absX > absY) {
                    if (dx > 0 && direction.x === 0) setNextDirection({ x: 1, y: 0 });
                    else if (dx < 0 && direction.x === 0) setNextDirection({ x: -1, y: 0 });
                } else {
                    if (dy > 0 && direction.y === 0) setNextDirection({ x: 0, y: 1 });
                    else if (dy < 0 && direction.y === 0) setNextDirection({ x: 0, y: -1 });
                }
            }
            touchStartRef.current = null;
        };

        const preventDefault = (e: Event) => e.preventDefault();

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });
        document.body.addEventListener("touchmove", preventDefault, { passive: false });

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            document.body.removeEventListener("touchmove", preventDefault);
        };
    }, [direction, gameOver, resetGame]);

    // Game Loop
    useEffect(() => {
        if (gameOver || gridDim.w <= 0) return;

        const tick = () => {
            const currentSnake = [...snakeRef.current];
            const currentFood = foodRef.current;
            const head = currentSnake[0];
            const nextHead = { x: head.x + nextDirection.x, y: head.y + nextDirection.y };

            setDirection(nextDirection);

            if (
                nextHead.x < 0 ||
                nextHead.x >= gridDim.w ||
                nextHead.y < 0 ||
                nextHead.y >= gridDim.h ||
                currentSnake.some((s) => s.x === nextHead.x && s.y === nextHead.y)
            ) {
                setGameOver(true);
                return;
            }

            const newSnake = [nextHead, ...currentSnake];

            if (nextHead.x === currentFood.x && nextHead.y === currentFood.y) {
                setScore((s) => s + 1);
                const nextFood = getRandomFood(newSnake, gridDim.w, gridDim.h);
                foodRef.current = nextFood;
                setFood(nextFood);
            } else {
                newSnake.pop();
            }

            snakeRef.current = newSnake;
            setSnake(newSnake);
        };

        const currentSpeed = Math.max(40, INITIAL_SPEED - score * 3);
        const interval = setInterval(tick, currentSpeed);
        return () => clearInterval(interval);
    }, [gameOver, nextDirection, gridDim, getRandomFood, score]);

    // Rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || gridDim.w <= 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.imageSmoothingEnabled = false;
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "#080808";
        ctx.lineWidth = 1;
        for (let i = 0; i <= gridDim.w; i++) {
            ctx.beginPath();
            ctx.moveTo(i * UNIT_SIZE, 0);
            ctx.lineTo(i * UNIT_SIZE, gridDim.h * UNIT_SIZE);
            ctx.stroke();
        }
        for (let j = 0; j <= gridDim.h; j++) {
            ctx.beginPath();
            ctx.moveTo(0, j * UNIT_SIZE);
            ctx.lineTo(gridDim.w * UNIT_SIZE, j * UNIT_SIZE);
            ctx.stroke();
        }

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(food.x * UNIT_SIZE + 2, food.y * UNIT_SIZE + 2, UNIT_SIZE - 4, UNIT_SIZE - 4);

        snake.forEach((s) => {
            ctx.fillRect(s.x * UNIT_SIZE + 1, s.y * UNIT_SIZE + 1, UNIT_SIZE - 2, UNIT_SIZE - 2);
        });
    }, [snake, food, gridDim]);

    return (
        <div className={`${pressStart2P.className} fixed inset-0 z-[99999] bg-black overflow-hidden select-none`}>
            <canvas ref={canvasRef} className="block" style={{ imageRendering: "pixelated" }} />

            {!gameOver && (
                <div className="absolute top-8 left-8 text-white/20 text-[10px] pointer-events-none uppercase tracking-[0.4em] select-none">
                    Score_{score.toString().padStart(3, "0")}
                </div>
            )}

            <button
                onClick={() => {
                    if (document.fullscreenElement) {
                        document.exitFullscreen().catch(() => { });
                    }
                    router.push("/");
                }}
                className="absolute top-8 right-8 text-white/40 hover:text-white border border-white/20 hover:border-white w-8 h-8 flex items-center justify-center text-[10px] z-[100001] transition-colors"
                title="Exit Game"
            >
                X
            </button>

            {gameOver && (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center z-[100000] text-white">
                    <h2 className="text-3xl md:text-5xl mb-8 tracking-tighter animate-blink">GAME OVER</h2>
                    <div className="text-[10px] md:text-xs mb-12 opacity-60 space-y-4">
                        <p>SCORE: {score}</p>
                        <p>PRESS [ SPACE ] TO RESTART</p>
                    </div>
                    <button
                        onClick={resetGame}
                        className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-none text-[10px] md:text-xs uppercase"
                    >
                        RETRY
                    </button>
                </div>
            )}

            <style jsx global>{`
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </div>
    );
}
