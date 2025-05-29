import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="mb-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hi, I'm Alex</h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-800 dark:text-zinc-200">
        Product Designer creating thoughtful, intuitive interfaces.
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
        I design and build products that feel magical, yet simple and intuitive. I obsess over the smallest details and I like to make people feel something through my work.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        I'm currently working at{ ' ' }
        <Link
          href="javascript:void(0)"
          className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Polymet
        </Link>
        . Previously, I've worked at{ ' ' }
        <Link
          href="javascript:void(0)"
          className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acme Inc
        </Link>
        .
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="javascript:void(0)"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-full"
        >
          Contact me{ ' ' }
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
            className="lucide lucide-arrow-right ml-2 h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
        <Link
          href="javascript:void(0)"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full"
        >
          View Resume
        </Link>
      </div>
    </section>
  );
};

export default HeroSection; 