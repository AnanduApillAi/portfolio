import Link from 'next/link';
import TimeDisplay from './TimeDisplay';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-16">
      <div className='flex justify-between items-center w-full'>
        <Link href="/" className="text-xl font-bold">
          <span className="font-serif italic text-2xl">A.A</span>
        </Link>

        <TimeDisplay />
      </div>

      <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-center space-x-1 p-4 z-50">
        <div className="flex items-center bg-zinc-200 dark:bg-zinc-800 rounded-full p-1">
          <Link href="/" className="px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/80">
            About
          </Link>
          <Link href="/uses" className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/80">
            Uses
          </Link>

          <ThemeToggle />
        </div>

      </nav>
    </header>
  );
};

export default Header; 