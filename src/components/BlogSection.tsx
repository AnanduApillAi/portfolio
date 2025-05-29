import Link from 'next/link';

const BlogSection = () => {
  const blogPosts = [
    {
      date: 'FEB 24, 2025',
      title: 'Improving UI for AI-Powered Tools: Beyond the Textarea',
      description: 'AI tools should be intuitive, not frustrating. Let\'s explore how structured inputs, interactive controls, and adaptive UIs can improve AI-powered tools, making them easier and more user-friendly.',
      link: 'javascript:void(0)',
    },
    {
      date: 'JAN 1, 2025',
      title: 'Why Designing a Personal Portfolio Is So Challenging',
      description: 'Struggling with designing your personal portfolio? Discover why it\'s so challenging and learn key insights on overcoming endless iterations, overthinking, and the pressure to impress.',
      link: 'javascript:void(0)',
    },
    {
      date: 'DEC 28, 2024',
      title: 'Reflecting on 2024: A Year of Growth and Gratitude',
      description: 'The opportunities, the challenges, and the lessons—everything has shaped me into a better version of myself.',
      link: 'javascript:void(0)',
    },
  ];

  return (
    <section className="mb-24">
      <div className="mb-12">
        <h3 className="text-sm uppercase text-zinc-500 dark:text-zinc-400 tracking-wider mb-2">Popular Reads</h3>
        <h2 className="text-3xl font-bold mb-10">Learn from My Most-Read Blog Posts: Practical Tips and Insights on Design and UX</h2>
      </div>
      <div className="space-y-12">
        {blogPosts.map((post, index) => (
          <div key={index} className="group">
            <Link href={post.link} className="block">
              <div className="flex flex-col">
                <p className="text-xs uppercase text-zinc-500 dark:text-zinc-400 tracking-wider mb-2">{post.date}</p>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
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