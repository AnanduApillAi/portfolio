import Image from 'next/image';
import type { Metadata } from 'next';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { devtoProfileUrl, getPosts } from '@/lib/devto';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const links = [
  { label: 'GitHub', href: 'https://github.com/AnanduApillAi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ananduapillai/' },
  { label: 'X', href: 'https://x.com/ananduapillai' },
  { label: 'Email', href: 'mailto:anandu.a.dev@gmail.com' },
];

const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="text-zinc-100 underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-zinc-300"
    >
      {children}
    </a>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="mb-6 text-zinc-100">{title}</h2>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="mr-8 w-full max-w-[100px] shrink-0 text-muted-foreground">{label}</div>
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}

export default async function Home() {
  const posts = await getPosts(5);

  return (
    <main className="mx-auto min-h-screen max-w-[600px] px-4 py-16 text-sm font-light sm:px-6">
      <header className="flex items-center">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white">
          <Image
            alt="Anandu A Pillai"
            src="/image/anandu.jpg"
            fill
            priority
            sizes="80px"
            className="translate-x-2 translate-y-1 scale-[1.6] object-contain"
          />
        </div>
        <div className="ml-4 flex-1">
          <h1 className="mb-0.5 text-xl">Anandu A Pillai</h1>
          <p className="text-muted-foreground">Frontend-first full stack developer from India</p>
        </div>
        <a
          href="/Resume/Anandu A Pillai-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground transition-colors hover:text-zinc-100"
        >
          Resume →
        </a>
      </header>

      <section className="mt-10">
        <p className="text-muted-foreground">
          I build clean, responsive, user-friendly web products with React and Next.js. I enjoy working at the
          intersection of design and engineering, turning ideas into products that feel simple and reliable.
        </p>
      </section>

      <Section title="Work">
        {experiences.map((exp) => (
          <Row key={`${exp.company}-${exp.role}`} label={exp.period}>
            <h3>
              {exp.role}
              {' · '}
              {exp.companyUrl ? <ExternalLink href={exp.companyUrl}>{exp.company}</ExternalLink> : exp.company}
            </h3>
            <p className="mt-1 text-muted-foreground">{exp.description}</p>
          </Row>
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((project) => (
          <Row key={project.title} label={project.title}>
            <p className="text-muted-foreground">{project.description}</p>
            <p className="mt-1 space-x-3">
              <ExternalLink href={project.liveLink}>live</ExternalLink>
              <ExternalLink href={project.github}>code</ExternalLink>
            </p>
          </Row>
        ))}
      </Section>

      {posts.length > 0 && (
        <Section title="Writing">
          {posts.map((post) => (
            <Row key={post.id} label={monthYear(post.publishedAt)}>
              <ExternalLink href={post.url}>{post.title}</ExternalLink>
            </Row>
          ))}
          <Row label="">
            <ExternalLink href={devtoProfileUrl}>All posts on dev.to →</ExternalLink>
          </Row>
        </Section>
      )}

      <Section title="Education">
        <Row label="2018 - 2022">
          <h3>B.Tech in Computer Science</h3>
          <p className="mt-1 text-muted-foreground">APJ Abdul Kalam Technological University (KTU)</p>
        </Row>
      </Section>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-muted-foreground">
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </nav>
        <span className="text-xs">© {new Date().getFullYear()} Anandu A Pillai</span>
      </footer>
    </main>
  );
}
