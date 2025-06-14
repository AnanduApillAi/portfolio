'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "Make it simple, but significant.",
    author: "Don Draper"
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali"
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames"
  },
  {
    text: "Done is better than perfect.",
    author: "Sheryl Sandberg"
  },
  {
    text: "Everything should be made as simple as possible, but not simpler.",
    author: "Albert Einstein"
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    text: "Art is never finished, only abandoned.",
    author: "Leonardo da Vinci"
  }
];


const QuoteDisplay = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTimer = () => {
      // Start progress animation
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
            return 0;
          }
          return prev + (100 / 50); // 50 steps over 5 seconds
        });
      }, 100);
    };

    const stopTimer = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };

    if (!isHovered) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => {
      stopTimer();
    };
  }, [isHovered]);

  // Handle quote change when progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
    }
  }, [currentQuoteIndex]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="text-zinc-600 dark:text-zinc-400 mb-8">
      <div className="relative min-h-[3.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="leading-relaxed"
          >
            "{currentQuote.text}"
            <span 
              className="text-zinc-500 dark:text-zinc-500 ml-2 whitespace-nowrap relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              — <span className="relative">
                {currentQuote.author}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-zinc-400 dark:bg-zinc-500"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: `${progress}%`
                  }}
                  transition={{ 
                    duration: 0.1,
                    ease: "easeOut"
                  }}
                />
              </span>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuoteDisplay; 