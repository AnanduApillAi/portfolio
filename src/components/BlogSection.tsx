import Link from 'next/link';

const BlogSection = () => {
  const blogPosts = [
    {
      date: 'JAN 15, 2024',
      title: 'Building Modern Web Applications with Next.js',
      description: 'A deep dive into building scalable and performant web applications using Next.js, TypeScript, and modern development practices.',
      link: '/blog/building-modern-web-apps',
    },
    {
      date: 'JAN 8, 2024',
      title: 'Design Systems at Scale',
      description: 'How to build and maintain design systems that grow with your team and product, ensuring consistency across all touchpoints.',
      link: '/blog/design-systems-at-scale',
    },
    {
      date: 'JAN 2, 2024',
      title: 'Optimizing Web Performance in 2024',
      description: 'Modern techniques for improving web performance, from bundle optimization to image compression and beyond.',
      link: '/blog/optimizing-web-performance',
    },
  ];

  return (
    <section className="mb-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-xl font-bold">Blog</h2>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center"
        >
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 18"
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
      <div className="space-y-12">
        {blogPosts.map((post, index) => (
          <div key={index} className="group">
            <Link href={post.link} className="block">
              <div className="flex flex-col">
                <p className="text-xs uppercase text-zinc-500 dark:text-zinc-400 tracking-wider mb-2">{post.date}</p>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-base">{post.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection; 