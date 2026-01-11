"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    period: "2025 - Present",
    role: "React Js Developer",
    company: "Linnk Group India",
    companyUrl: "https://www.linnk.com/linnk-group-india/",
    type: "Onsite",
    description: "Building SaaS Platforms."
  },
  {
    period: "2023 - 2025",
    role: "Lead Front End Developer",
    company: "Extravelmoney",
    companyUrl: "https://www.extravelmoney.com/",
    type: "Onsite",
    description: "Building Extravelmoney website and internal tools."
  },
  {
    period: "2023 - 2025",
    role: "Front-End Developer",
    company: "Veeble",
    companyUrl: "https://www.veeble.com/",
    type: "Consulting",
    description: "Reworking the Veeble website."
  },
  {
    period: "2022 - 2023",
    role: "Front End Developer",
    company: "Tapclone",
    type: "Onsite",
    description: "Building websites and dashboards for clients."
  },
  {
    period: "2019 - Present",
    role: "Freelance Web Developer",
    company: "Freelance",
    type: "Remote",
    description: "Building websites and dashboards for clients around the world."
  }
];

function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="my-14">
      <h3 className="mb-4 text-lg font-medium">
        Work Experience
      </h3>

      <div className="bg-zinc-100/50 dark:bg-zinc-800/30 rounded-2xl p-6 relative group/container">
        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
          {experiences.map((exp, index) => {
            const isHidden = !isExpanded && index >= 2;

            return (
              <AnimatePresence key={index}>
                {!isHidden && (
                  <motion.div
                    initial={index >= 2 ? { height: 0, opacity: 0 } : false}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className={`flex py-6 ${index === 0 ? 'pt-0' : ''} ${(!isExpanded && index === 1) || (isExpanded && index === experiences.length - 1) ? 'pb-0' : ''}`}>
                      <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0 mt-1">
                        {exp.period}
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">{exp.role}</h4>
                        <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">
                          {exp.companyUrl ? (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors"> {exp.company} </a>
                          ) : (
                            exp.company
                          )}
                          {" "}· {exp.type}
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* Expand Button */}
        <div className="absolute bottom-0 right-8 translate-y-full">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-10 h-5 rounded-b-full bg-zinc-100/50 dark:bg-zinc-800/30 dark:border-zinc-700 cursor-pointer text-zinc-500 dark:text-zinc-400 group transition-colors"
            title={isExpanded ? "Show less" : "Show more"}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center -mt-1"
            >
              <ChevronDown size={18} className="group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
