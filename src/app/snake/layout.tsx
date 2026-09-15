import type { Metadata } from 'next';

// The Snake page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Snake',
  description: 'A little snake game hidden on anandu.dev.',
  alternates: { canonical: '/snake' },
};

export default function SnakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
