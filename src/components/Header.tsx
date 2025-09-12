"use client"
import Link from 'next/link';
import TimeDisplay from './TimeDisplay';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  // Determine which nav item is active and its position
  const getActiveIndex = () => {
    if (pathname === '/') return 0;
    if (pathname === '/about') return 1;
    if (pathname === '/projects' || pathname.startsWith('/projects/')) return 2;
    return 0;
  };

  const activeIndex = getActiveIndex();

  return (
    <header className="flex justify-between items-center max-w-[600px] px-4 sm:px-6 py-8 mx-auto">
      {pathname !== '/about' && (
      <div className='flex justify-between items-center w-full'>
        <Link href="/" className="text-xl font-bold">
          <span className="font-serif italic text-2xl">A.A</span>
        </Link>

        <TimeDisplay />
      </div>
      )}

      <motion.nav className="fixed bottom-0 left-0 right-0 flex items-center justify-center space-x-1 p-4 z-50"
        initial={{  y: 100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.2, 
          delay: 0.8, 
          type: "spring",
          damping: 12,
          stiffness: 100
        }}
      >
        <div className="relative flex items-center bg-zinc-200 dark:bg-zinc-800 rounded-full px-2 py-2">
          {/* Sliding background indicator */}
          <motion.div
            className="absolute bg-white dark:bg-zinc-900 rounded-full h-8"
            animate={{

              x: activeIndex === 0 ? 0 : activeIndex === 1 ? 79 : 163, // More precise positioning
              width: activeIndex === 2 ? 90 : 80, // Adjusted width for Projects
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300
            }}
            style={{
              left: 8, // Increased left offset for better centering
              top: 10, // Center vertically
            }}
          />
          
          <Link 
            href="/" 
            className="relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Projects
          </Link>
        </div>

      </motion.nav>
    </header>
  );
};

export default Header; 