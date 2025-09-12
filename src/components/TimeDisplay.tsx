'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const themes = [
  {
    id: 'minimal',
    name: 'Minimal',
    containerClass: 'bg-zinc-100/40 dark:bg-zinc-800/40 rounded-sm h-8 flex items-center justify-center min-w-[110px] border border-zinc-200/50 dark:border-zinc-700/50',
    timeClass: 'text-zinc-600/80 dark:text-zinc-400/80 text-xs font-mono tracking-wide opacity-80 text-center',
  },
  {
    id: 'digital',
    name: 'Digital',
    containerClass: 'bg-zinc-100/40 dark:bg-zinc-800/40 rounded-sm h-8 flex items-center justify-center min-w-[110px] border border-zinc-200/50 dark:border-zinc-700/50',
    timeClass: 'text-zinc-600/80 dark:text-zinc-400/80 text-xs font-digital font-bold tracking-wider opacity-80 text-center',
  }
];

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentTheme = themes[currentThemeIndex];

  useEffect(() => {
    // Set initial time on client side only
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleThemeChange = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Wait for shutter animation to complete, then change theme
    setTimeout(() => {
      setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
    }, 175); // Half of the total animation duration (350ms / 2)
    
    // Reset animation state after complete cycle
    setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: 'DS-Digital';
          src: url('/fonts/DS-DIGI.TTF') format('truetype');
          font-weight: normal;
          font-display: swap;
          font-style: normal;
        }
        .font-digital {
          font-family: 'DS-Digital', 'Courier New', monospace;
          font-size: 15px;
        }
      `}</style>
      
      <div
        className={`cursor-pointer transition-opacity duration-300 hover:opacity-100 relative overflow-hidden select-none ${currentTheme.containerClass}`}
        onClick={handleThemeChange}
      >
        <div className={currentTheme.timeClass} suppressHydrationWarning>
          {currentTime ? formatTime(currentTime) : '--:--:-- --'}
        </div>
        
        {/* Shutter Animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-zinc-400/80 dark:bg-zinc-600/80"
          style={{ transformOrigin: "bottom" }}
          initial={{ height: "0%" }}
          animate={{ 
            height: isAnimating ? ["0%", "100%", "0%"] : "0%"
          }}
          transition={{
            duration: 0.35,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
        />
      </div>
    </>
  );
};

export default TimeDisplay;