import type { Metadata } from 'next';

// The About page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'About',
  description: 'Work experience, education, and contact details for Anandu A Pillai, a frontend-first full stack developer from India.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
