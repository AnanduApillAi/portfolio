import Link from 'next/link';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      category: 'Fintech Startup',
      title: 'Redesigning the User Experience',
      description: 'A comprehensive redesign of a financial app to improve user engagement and satisfaction.',
      link: 'javascript:void(0)',
    },
    {
      category: 'Fortune 500 Company',
      title: 'Building an Enterprise Design System',
      description: 'Creating a scalable design system to unify the visual language across multiple products.',
      link: 'javascript:void(0)',
    },
  ];

  return (
    <section className="mb-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Case Studies</h2>
        <Link
          href="javascript:void(0)"
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
      <div>
        {caseStudies.map((study, index) => (
          <div key={index} className="group border-b border-zinc-200 dark:border-zinc-800 py-8">
            <Link href={study.link} className="block">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{study.category}</div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base">{study.description}</p>
                </div>
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
                  className="lucide lucide-arrow-right h-5 w-5 text-zinc-400 dark:text-zinc-500 mt-1 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection; 