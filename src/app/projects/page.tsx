import Link from 'next/link';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import { GlobeIcon } from 'lucide-react';

const ProjectsPage = () => {

  const categories = [
    'All',
    'Marketplace',
    'Portfolio',
    'Web Development',
    'Developer Tools',
    'Entertainment',
    'Marketing'
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 py-8">

        <main className="mt-8">
          {/* Page Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="group inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 group-hover:-translate-x-1 transition-transform duration-200"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to home
            </Link>

            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl">
              A collection of projects I've worked on, showcasing different technologies and design approaches.
            </p>
          </div>



          {/* Projects Grid */}
          <div className="space-y-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group/card bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`${project.brandColor} rounded-xl w-14 h-14 flex items-center justify-center`}>
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={42}
                        height={42}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Built with:</span>
                  <div className="flex items-center gap-2">
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-2 py-1"
                      >
                        <Image
                          src={`/tech-icons/${tech}.svg`}
                          alt={`${tech} icon`}
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                          {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href={project.liveLink}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
                  >
                    <GlobeIcon className="w-4 h-4" />
                    Live Site
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/github inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage; 