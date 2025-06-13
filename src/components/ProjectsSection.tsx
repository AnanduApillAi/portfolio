import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  const projectsData = [
    {
      logo: '/projects/logo/nasa-logo.png', // Updated path
      shortDescription: 'Travel essentials, reinvented.',
      url: 'https://www.infinitypillow.co',
      hoverImage: '/projects/project-img.webp', // Updated path
      hoverBgColor: 'group-hover:bg-sky-700', // Example hover color
    },
    {
      logo: '/projects/logo/nasa-logo.png', // Updated path
      shortDescription: 'Travel essentials, reinvented.',
      url: 'https://www.infinitypillow.co',
      hoverImage: '/projects/project-img.webp', // Updated path
      hoverBgColor: 'group-hover:bg-sky-700', // Example hover color
    },
    {
      logo: '/projects/logo/nasa-logo.png', // Updated path
      shortDescription: 'Travel essentials, reinvented.',
      url: 'https://www.infinitypillow.co',
      hoverImage: '/projects/project-img.webp', // Updated path
      hoverBgColor: 'group-hover:bg-sky-700', // Example hover color
    },
    {
      logo: '/projects/logo/nasa-logo.png', // Updated path
      shortDescription: 'Travel essentials, reinvented.',
      url: 'https://www.infinitypillow.co',
      hoverImage: '/projects/project-img.webp', // Updated path
      hoverBgColor: 'group-hover:bg-sky-700', // Example hover color
    },
    
    
  ];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center"
        >
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right ml-1 h-4 w-4"
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
            className={`group p-8 bg-zinc-800 dark:bg-zinc-800 rounded-[24px] transition-all duration-300 ease-in-out overflow-hidden ${project.hoverBgColor}`}
          >
            <div className="flex items-center gap-8">
              <div className="project-logo flex-shrink-0">
                <Image
                  src={project.logo}
                  alt={`${project.shortDescription} logo`}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="project-details">
                <p className="text-zinc-100 dark:text-zinc-50">{project.shortDescription}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 dark:text-zinc-300 hover:text-zinc-200 dark:hover:text-zinc-100"
                >
                  {project.url.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>

            <div className="w-full h-0 mt-0 opacity-0 group-hover:mt-8 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 ease-in-out overflow-hidden">
              <div
                className="w-full rounded-[24px] bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${project.hoverImage})`,
                  paddingBottom: '62.5%',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 