'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExpandIcon } from './ui/expand';
import { useRouter } from 'next/navigation';

const ClayPreviewCSS: React.FC = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow relative group"
    >
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => router.push('/clay-playground')}
          className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700 shadow-sm"
        >
          <ExpandIcon size={20} className="text-zinc-600 dark:text-zinc-400" />
        </button>
      </div>
      
      <div className="aspect-square w-full max-w-sm mx-auto flex items-center justify-center relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-xl animate-pulse">
          <div className="absolute top-4 left-6 w-3 h-3 bg-white/30 rounded-full"></div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold mb-2">3D Clay Playground</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          Sculpt and paint with advanced 3D tools
        </p>
        
        <button
          onClick={() => router.push('/clay-playground')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <span>Enter Playground</span>
          <ExpandIcon size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ClayPreviewCSS; 