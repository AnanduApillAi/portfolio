import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Anandu A Pillai',
  description: 'Thoughts on development, design, and building things on the web.',
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'building-modern-web-apps',
    title: 'Building Modern Web Applications with Next.js',
    description: 'A deep dive into building scalable and performant web applications using Next.js, TypeScript, and modern development practices.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'TypeScript', 'Web Development']
  },
  {
    slug: 'design-systems-at-scale',
    title: 'Design Systems at Scale',
    description: 'How to build and maintain design systems that grow with your team and product, ensuring consistency across all touchpoints.',
    date: '2024-01-08',
    readTime: '12 min read',
    tags: ['Design Systems', 'UI/UX', 'Frontend']
  },
  {
    slug: 'optimizing-web-performance',
    title: 'Optimizing Web Performance in 2024',
    description: 'Modern techniques for improving web performance, from bundle optimization to image compression and beyond.',
    date: '2024-01-02',
    readTime: '6 min read',
    tags: ['Performance', 'Optimization', 'Web Development']
  },
  {
    slug: 'the-future-of-frontend',
    title: 'The Future of Frontend Development',
    description: 'Exploring emerging trends and technologies that are shaping the future of frontend development and user experiences.',
    date: '2023-12-20',
    readTime: '10 min read',
    tags: ['Frontend', 'Technology', 'Future']
  }
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 py-8">
        <main>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Thoughts on development, design, and building things on the web.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="bg-white/50 dark:bg-zinc-900/50 rounded-2xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-300 hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:border-zinc-300/50 dark:hover:border-zinc-700/50">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                        {post.title}
                      </h2>
                      <svg
                        className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs text-zinc-500 dark:text-zinc-500">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              More posts coming soon...
            </p>
          </div>
        </main>
      </div>
    </div>
  );
} 