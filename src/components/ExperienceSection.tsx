"use client"
import React from 'react';
import { motion } from 'framer-motion';

function ExperienceSection() {
  return (
    <motion.section 
      className="my-14"
      initial={{ opacity: 0, filter: "blur(8px)", y: 30 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
    >
      <motion.h3 
        initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        className="mb-4 text-lg font-medium"
      >
        Work Experience
      </motion.h3>
      
      <motion.div 
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        className="bg-zinc-100/50 dark:bg-zinc-800/30 rounded-2xl p-6"
      >
        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
          <motion.div 
            initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex py-6 first:pt-0 last:pb-0"
          >
            <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0">
              2020 - Present
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Senior Designer</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Font Awesome · Remote</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Making icons &amp; illustrations — sometimes writing about them too
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex py-6 first:pt-0 last:pb-0"
          >
            <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0">
              2018 - 2020
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Front-End Developer</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Freelance · Remote</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Working for clients around the world building modern web applications
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex py-6 first:pt-0 last:pb-0"
          >
            <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0">
              2016 - 2018
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">UI/UX Designer</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Design Studio · New York</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Creating digital experiences for startups and established brands
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ExperienceSection;