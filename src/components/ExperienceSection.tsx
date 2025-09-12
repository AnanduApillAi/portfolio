"use client"
import React from 'react';

function ExperienceSection() {
  return (
    <section className="my-14">
      <h3 className="mb-4 text-lg font-medium">
        Work Experience
      </h3>
      
      <div className="bg-zinc-100/50 dark:bg-zinc-800/30 rounded-2xl p-6">
        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="flex py-6 first:pt-0 last:pb-0">
            <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0 mt-1">
              2023 - Present
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Lead Front End Developer</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2"><a href="https://www.extravelmoney.com/" target="_blank" rel="noopener noreferrer"> Extravelmoney </a> · Onsite</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Building Extravelmoney website and internal tools.
              </p>
            </div>
          </div>

          <div className="flex py-6 first:pt-0 last:pb-0">
            <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0 mt-1">
              2023 - Present
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Front-End Developer</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2"><a href="https://www.veeble.com/" target="_blank" rel="noopener noreferrer"> Veeble </a> · Consulting</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Reworking the Veeble website.
              </p>
            </div>
          </div>

          <div className="flex py-6 first:pt-0 last:pb-0">
            <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0 mt-1">
              2022 - 2023
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Front End Developer</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Tapclone · Onsite</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Building websites and dashboards for clients.
              </p>
            </div>
          </div>

          <div className="flex py-6 first:pt-0 last:pb-0">
            <div className="text-zinc-500 dark:text-zinc-400 mr-8 w-24 text-xs font-medium shrink-0 mt-1">
              2019 - 2022
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Freelance Web Developer</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Freelance · Remote</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Building websites and dashboards for clients around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;