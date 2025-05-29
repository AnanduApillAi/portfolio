const ImpactSection = () => {
  const impacts = [
    {
      title: 'Reduce churn by designing intuitive user experiences',
      description: 'Keep customers engaged with thoughtful, user-centered design.',
      icon: (
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
          className="lucide lucide-users h-5 w-5 text-zinc-700 dark:text-zinc-300"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: 'Increase sign-ups with high-converting landing pages',
      description: 'Tailored to your audience for maximum effectiveness.',
      icon: (
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
          className="lucide lucide-trending-up h-5 w-5 text-zinc-700 dark:text-zinc-300"
          aria-hidden="true"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
    },
    {
      title: 'Boost retention with seamless experiences',
      description: 'Craft mobile and web app designs that users love.',
      icon: (
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
          className="lucide lucide-thumbs-up h-5 w-5 text-zinc-700 dark:text-zinc-300"
          aria-hidden="true"
        >
          <path d="M7 10v12"></path>
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
        </svg>
      ),
    },
    {
      title: 'Accelerate launches with production-ready designs',
      description: 'Pixel-perfect designs for faster development.',
      icon: (
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
          className="lucide lucide-rocket h-5 w-5 text-zinc-700 dark:text-zinc-300"
          aria-hidden="true"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
      ),
    },
    {
      title: 'Drive growth through strategic UX improvements',
      description: 'Align with your business goals for measurable impact.',
      icon: (
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
          className="lucide lucide-chart-no-axes-column h-5 w-5 text-zinc-700 dark:text-zinc-300"
          aria-hidden="true"
        >
          <line x1="18" x2="18" y1="20" y2="10"></line>
          <line x1="12" x2="12" y1="20" y2="4"></line>
          <line x1="6" x2="6" y1="20" y2="14"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className="mb-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">What You Get When We Work Together</h2>
        <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl">
          Design isn't just about aesthetics—it's about delivering real, measurable results. Here's how my design work drives impact for your business:
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {impacts.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
          >
            <div className="flex-shrink-0 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
              {item.icon}
            </div>
            <div>
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection; 