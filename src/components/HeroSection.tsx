"use client"
import Link from 'next/link';
import QuoteDisplay from './QuoteDisplay';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import VariableProximity from './ui/VariableProximity';

const HeroSection = () => {
  const containerRef = useRef(null);
  return (
    <section>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Hi, I'm Anandu
      </h1>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200" >
        <span className="">Front-End focused Full Stack dev from India</span>
      </h2>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
        I build things on the web that mean something to me. If they end up useful to someone else, that's a bonus.
      </p>

      <div>
        <QuoteDisplay />
      </div>
    </section>
  );
};

export default HeroSection; 