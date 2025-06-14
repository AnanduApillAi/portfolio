"use client"
import Link from 'next/link';
import QuoteDisplay from './QuoteDisplay';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(10px)", 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold mb-4"
      >
        Hi, I'm Anandu
      </motion.h1>

      <motion.h2 
        variants={itemVariants}
        className="text-xl sm:text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200"
      >
        <span
          className="cursor-pointer relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Frontend
        </span>
        <span className="mx-1">-</span>
        <motion.span
          className="relative"
          initial={false}
          animate={{
            color: isHovered ? 'rgb(16 185 129)' : undefined, // emerald-500
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-emerald-200/30 dark:from-emerald-900/20 dark:to-emerald-800/10 rounded-md -mx-1 px-1"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scaleX: isHovered ? 1 : 0,
            }}
            transition={{ 
              duration: 0.4,
              ease: 'easeInOut',
              opacity: { duration: 0.2 }
            }}
            style={{ transformOrigin: 'left' }}
          />
          <span className="relative z-10">focused</span>
        </motion.span>
        <span className="ml-1">Full Stack dev from India</span>
      </motion.h2>
      
      <motion.p 
        variants={itemVariants}
        className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl"
      >
        I build things on the web that mean something to me. If they end up useful to someone else, that's a bonus.
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <QuoteDisplay />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection; 