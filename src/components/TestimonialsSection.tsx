import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Product Manager at Acme Inc',
      testimonial: 'Working with this designer transformed our product. Their attention to detail and user-centered approach resulted in a 40% increase in user engagement.',
      image: 'https://github.com/yusufhilmi.png',
    },
    {
      name: 'Michael Chen',
      title: 'CEO of TechStart',
      testimonial: "The design system created for our startup has been invaluable. It's helped us maintain consistency across all our products and accelerated our development process.",
      image: 'https://github.com/furkanksl.png',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Marketing Director at GrowthCo',
      testimonial: 'The redesign of our landing pages resulted in a 25% increase in conversion rates. The process was collaborative and the results speak for themselves.',
      image: 'https://github.com/kdrnp.png',
    },
    {
      name: 'David Kim',
      title: 'Founder of DesignMatic',
      testimonial: 'Exceptional work on our mobile app UI. The intuitive design has received overwhelmingly positive feedback from our users and stakeholders.',
      image: 'https://github.com/yahyabedirhan.png',
    },
    {
      name: 'Lisa Thompson',
      title: 'UX Lead at Enterprise Solutions',
      testimonial: 'A true professional who understands both design aesthetics and business objectives. The design not only looks great but also drives real results.',
      image: 'https://github.com/denizbuyuktas.png',
    },
  ];

  return (
    <section className="mb-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="flex space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full">
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
              className="lucide lucide-chevron-left h-5 w-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full">
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
              className="lucide lucide-chevron-right h-5 w-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="snap-start flex-shrink-0">
            <div className="min-w-[320px] md:min-w-[380px] h-full p-6 rounded-xl bg-white/10 dark:bg-zinc-900/30 backdrop-blur-sm border border-white/20 dark:border-zinc-800/50 shadow-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 mr-4 border-2 border-white/20 dark:border-zinc-800/50">
                    <Image
                      className="aspect-square h-full w-full"
                      alt={testimonial.name}
                      src={testimonial.image}
                      width={48}
                      height={48}
                    />
                  </span>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{testimonial.name}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 flex-grow mb-4">{testimonial.testimonial}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 text-amber-500"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 