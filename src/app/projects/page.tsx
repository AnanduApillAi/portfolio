import Link from 'next/link';
import Image from 'next/image';

const ProjectsPage = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Infinity Pillow',
      logo: '/projects/logo/nasa-logo.png',
      shortDescription: 'Travel essentials, reinvented.',
      fullDescription: 'A comprehensive e-commerce platform for travel accessories with a focus on comfort and innovation. Built with modern web technologies to provide seamless shopping experience.',
      url: 'https://www.infinitypillow.co',
      github: 'https://github.com/example/infinity-pillow',
      image: '/projects/project-img.webp',
      brandColorClass: 'sky-brand',
      brandColor: 'bg-sky-600',
      techStack: ['next', 'typescript', 'tailwind'],
      category: 'E-commerce',
      year: '2024',
      status: 'Live'
    },
    {
      id: 2,
      title: 'EcoTrack',
      logo: '/projects/logo/nasa-logo.png',
      shortDescription: 'Sustainable living, simplified.',
      fullDescription: 'A comprehensive sustainability tracking application that helps users monitor their carbon footprint and adopt eco-friendly practices in their daily lives.',
      url: 'https://www.ecotrack.app',
      github: 'https://github.com/example/ecotrack',
      image: '/projects/project-img.webp',
      brandColorClass: 'emerald-brand',
      brandColor: 'bg-emerald-600',
      techStack: ['next', 'supabase', 'typescript'],
      category: 'Sustainability',
      year: '2024',
      status: 'Live'
    },
    {
      id: 3,
      title: 'DesignFlow',
      logo: '/projects/logo/nasa-logo.png',
      shortDescription: 'Creative workflows, optimized.',
      fullDescription: 'A design collaboration platform that streamlines creative workflows for teams, featuring real-time collaboration, version control, and project management tools.',
      url: 'https://www.designflow.studio',
      github: 'https://github.com/example/designflow',
      image: '/projects/project-img.webp',
      brandColorClass: 'amber-brand',
      brandColor: 'bg-amber-600',
      techStack: ['framer', 'typescript', 'tailwind'],
      category: 'Design Tools',
      year: '2023',
      status: 'Live'
    },
    {
      id: 4,
      title: 'MindfulMoments',
      logo: '/projects/logo/nasa-logo.png',
      shortDescription: 'Wellness, made personal.',
      fullDescription: 'A mindfulness and meditation platform with personalized content, progress tracking, and community features to support mental wellness journeys.',
      url: 'https://www.mindfulmoments.app',
      github: 'https://github.com/example/mindfulmoments',
      image: '/projects/project-img.webp',
      brandColorClass: 'rose-brand',
      brandColor: 'bg-rose-600',
      techStack: ['php', 'tailwind'],
      category: 'Wellness',
      year: '2023',
      status: 'Live'
    },
    {
      id: 5,
      title: 'CodeMentor Hub',
      logo: '/projects/logo/nasa-logo.png',
      shortDescription: 'Learning code, simplified.',
      fullDescription: 'An interactive coding education platform that connects learners with mentors, featuring live coding sessions, project-based learning, and skill assessments.',
      url: 'https://www.codementorhub.dev',
      github: 'https://github.com/example/codementor-hub',
      image: '/projects/project-img.webp',
      brandColorClass: 'violet-brand',
      brandColor: 'bg-violet-600',
      techStack: ['next', 'typescript', 'supabase'],
      category: 'Education',
      year: '2024',
      status: 'In Development'
    },
    {
      id: 6,
      title: 'LocalMarket',
      logo: '/projects/logo/nasa-logo.png',
      shortDescription: 'Community commerce, connected.',
      fullDescription: 'A local marketplace platform that connects community members for buying, selling, and trading goods and services within their neighborhood.',
      url: 'https://www.localmarket.community',
      github: 'https://github.com/example/localmarket',
      image: '/projects/project-img.webp',
      brandColorClass: 'indigo-brand',
      brandColor: 'bg-indigo-600',
      techStack: ['next', 'typescript', 'tailwind', 'supabase'],
      category: 'Marketplace',
      year: '2023',
      status: 'Live'
    }
  ];

  const categories = ['All', 'E-commerce', 'Sustainability', 'Design Tools', 'Wellness', 'Education', 'Marketplace'];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 py-8">
        
        <main className="mt-8">
          {/* Page Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-6"
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
                className="mr-2"
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
                    <div className={`${project.brandColor} rounded-xl p-3`}>
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                        <span>•</span>
                        {project.status === 'Live' ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/globe inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-200 cursor-pointer group-hover/card:animate-pulse"
                            title="View live project"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="transition-transform duration-200 group-hover/globe:rotate-12"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                              <path d="M2 12h20" />
                            </svg>
                            Live
                          </a>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                            {project.status}
                          </span>
                        )}
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
                    href="/projects/case-study"
                    className="group/case-study inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
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
                      className="transition-transform duration-200 group-hover/case-study:scale-110"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Case Study
                  </Link>
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
                      className="transition-transform duration-200 group-hover/github:scale-110"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    View Code
                  </a>
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