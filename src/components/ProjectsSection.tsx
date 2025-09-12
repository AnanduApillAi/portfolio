import Link from 'next/link';
import Image from 'next/image';
import GlareHover from './ui/GlareHover';

const TechStackSection = () => {
  const techData = [
    { name: 'Next.js', icon: 'next' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'Framer', icon: 'framer' },
    { name: 'PHP', icon: 'php' },
    { name: 'Next.js', icon: 'next' },
    { name: 'TypeScript', icon: 'typescript' },
  ];

  return (
    <section className="mb-16">
      <h3 className="mb-6 text-lg font-medium">Tech Stack</h3>

      <div className="">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 justify-start max-w-2xl mx-auto">
          {techData.map((tech, index) => (
            <GlareHover
              key={index}
              glareColor="#ffffff"
              borderRadius="100px"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              className="group min-w-[5.5rem] sm:min-w-[7.2rem] flex items-center gap-3 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-full  py-2 px-2 sm:px-3 transition-all duration-300"
            >
              <div className="flex items-center gap-3">

              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 transition-colors duration-300">
                <Image
                  src={`/tech-icons/${tech.icon}.svg`}
                  alt={`${tech.name} icon`}
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain min-w-4 sm:min-w-5"
                />
              </div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 whitespace-nowrap flex-1">
                  {tech.name}
                </span>
              </div>
            </GlareHover>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-[0.7rem] text-zinc-500 dark:text-zinc-400">
            Technologies I work with daily.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projectsData = [
    {
      code: 'rwc',
      logo: '/projects/logo/Rewocon.webp',
      shortDescription: 'Builders connected.',
      url: 'https://www.rewoconnect.com',
      hoverImage: '/projects/rewoconnect-cover.png',
      brandColorClass: 'teal-brand',
      brandColor: 'bg-teal-900',
      techStack: ['next', 'typescript', 'tailwind'],
      dimensions: [42,42],
    },
    {
      code: 'ats',
      logo: '/projects/logo/artist-logo.png',
      shortDescription: 'Dynamic artist portfolio.',
      url: 'https://sibusartisanspace.com.au',
      hoverImage: '/projects/project-img.png',
      brandColorClass: 'fuchsia-brand',
      brandColor: 'bg-fuchsia-700',
      techStack: ['next', 'supabase', 'typescript'],
      dimensions: [42,42],
    },
    {
      code: 'vb',
      logo: '/projects/logo/veeble-logo.png',
      shortDescription: 'Veeble website.',
      url: 'https://www.veeble.com',
      hoverImage: '/projects/project-img.png',
      brandColorClass: 'blue-brand',
      brandColor: 'bg-blue-400',
      techStack: ['php', 'typescript', 'tailwind'],
      dimensions: [64,64],
    },
    
  ];

  return (
    <>
      <section className="mb-16 ">
        <div className="flex justify-between items-center">
          <h3 className="mb-4 text-lg font-medium">Projects</h3>
          <Link
            href="/projects"
            className="group justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-8 rounded-md px-3 text-xs flex items-center"
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="space-y-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-zinc-800 dark:bg-zinc-800/30 border border-zinc-800/30 rounded-[24px] transition-all duration-300 ease-in-out overflow-hidden project-card project-${project.code} ${project.brandColorClass}`}
            >
              <div className="flex items-center gap-8">
                <div className="project-logo flex-shrink-0">
                  <div className={`${project.brandColor} transition-colors duration-300 rounded-2xl w-16 h-16 flex justify-center items-center`}>
                    <Image
                      src={project.logo}
                      alt={`${project.shortDescription} logo`}
                      width={project.dimensions[0]}
                      height={project.dimensions[1]}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="project-details">
                  <p className="text-zinc-100 dark:text-zinc-50">{project.shortDescription}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link inline-flex items-center gap-2 text-sm text-zinc-300 dark:text-zinc-200 hover:text-zinc-100 dark:hover:text-white transition-colors duration-200"
                  >
                    <span>{project.url.replace(/^https?:\/\//, '')}</span>
                    <svg
                      className="link-arrow w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 18"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="image-display relative">
                {/* Tech Stack Overlay - Positioned in upper-right of background image */}
                <div className="tech-stack-overlay absolute -right-[1.5rem] top-1/2 -translate-y-1/2">
                  <div className="backdrop-container h-full rounded-2xl">
                    <div className="bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center justify-center gap-2 w-[3rem] py-2">
                      <div className="flex flex-col items-center gap-2">
                        {project.techStack.map((tech, techIndex) => (

                          <div
                            key={techIndex}
                            className="group/icon relative"
                            title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                          >
                            <div className="tech-icon w-8 h-8 flex items-center justify-center rounded-lg">
                              <Image
                                src={`/tech-icons/${tech}.svg`}
                                alt={`${tech} icon`}
                                title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain filter brightness-125 drop-shadow-sm"
                              />
                            </div>
                          </div>


                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TechStackSection />
    </>
  );
};

export default ProjectsSection;