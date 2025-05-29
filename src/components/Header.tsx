import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-16">
      <Link href="/" className="text-xl font-bold">
        <span className="font-serif italic">Alex</span>
      </Link>
      <nav className="flex items-center space-x-1">
        <div className="hidden sm:flex items-center bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full p-1">
          <Link href="/" className="px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/80">
            About
          </Link>
          <Link href="/uses" className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/80">
            Uses
          </Link>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 ml-2 rounded-full">
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
            className="lucide lucide-sun h-5 w-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header; 