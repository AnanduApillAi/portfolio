"use client"
import Link from 'next/link';
import { motion } from 'motion/react';
import DecryptedText from './ui/DecryptedText';
import SnakeTeaser from './SnakeTeaser';

const Footer = () => {
  return (
    <footer className="pb-24 max-w-[600px] px-4 sm:px-6 mx-auto mt-16 md:mt-0">
      <div className="border-t border-zinc-800 pt-12 relative">
        <SnakeTeaser variant="footer" />
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >




            <Link
              href="https://www.linkedin.com/in/ananduapillai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.div>
            </Link>

            <Link
              href="mailto:anandu.a.dev@gmail.com"
              className="group"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </motion.div>
            </Link>
          </motion.div>

          {/* Copyright and V1 Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 text-center"
          >
            <div className="text-sm text-zinc-500">
              <DecryptedText
                text={`© ${new Date().getFullYear()} Anandu. All rights reserved.`}
                duration={2000}
                animateOn="view"
                revealDirection="start"
              />
            </div>

            <div className="hidden sm:block w-1 h-1 bg-zinc-600 rounded-full"></div>

            <Link
              href="https://v1.anandu.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="text-sm text-zinc-500 group transition-colors duration-200 flex items-center gap-1.5"
              >
                <span className="text-xs font-mono">v1</span>
                <span className='opacity-60'>portfolio</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="transition-transform group-hover:translate-x-1 opacity-60"
                >
                  <path d="M3 6h6M7 4l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.div>


        </div>
      </div>
    </footer>
  );
};

export default Footer; 