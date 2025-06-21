import Link from 'next/link';
import Image from 'next/image';

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 py-8">
        
        <main className="mt-8">
          {/* Navigation */}
          <div className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-sky-600 rounded-xl p-3">
                <Image
                  src="/projects/logo/nasa-logo.png"
                  alt="Project logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Infinity Pillow</h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                  Travel essentials, reinvented.
                </p>
              </div>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">Category:</span>
                <span>E-commerce</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Timeline:</span>
                <span>6 months</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Year:</span>
                <span>2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Role:</span>
                <span>Lead Designer & Developer</span>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.infinitypillow.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                View Live Project
              </a>
              <a
                href="https://github.com/example/infinity-pillow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                View Source Code
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <Image
                src="/projects/project-img.webp"
                alt="Infinity Pillow project showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Case Study Content */}
          <article className="prose prose-zinc dark:prose-invert max-w-none">
            
            {/* Overview Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Project Overview</h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  Infinity Pillow represents a complete reimagining of travel comfort accessories. 
                  This e-commerce platform was built from the ground up to provide travelers with 
                  innovative, high-quality comfort solutions that adapt to any journey.
                </p>
                
                <p>
                  The project challenged me to create not just a beautiful interface, but a 
                  comprehensive user experience that guides customers from discovery to purchase 
                  with minimal friction while conveying the premium nature of the products.
                </p>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">The Challenge</h2>
              
              <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl p-8 mb-8">
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 italic">
                  "How do you sell comfort through a screen? How do you convey the tactile 
                  experience of premium travel accessories in a digital space?"
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  The travel accessories market is saturated with generic products and bland 
                  e-commerce experiences. Customers struggle to understand product quality 
                  and suitability without physical interaction.
                </p>
                
                <p>
                  Key challenges included:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Building trust in product quality without physical demonstration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Creating an premium feeling that justifies higher price points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Optimizing for mobile users who shop on-the-go</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Streamlining the purchase process for impulse buyers</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">The Solution</h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12">
                <p>
                  I designed a premium e-commerce experience that emphasizes visual storytelling, 
                  social proof, and seamless user flows. The solution focuses on three core pillars:
                </p>
              </div>

              {/* Solution Grid */}
              <div className="grid gap-8 mb-12">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Visual Storytelling</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    High-quality lifestyle photography and interactive product demonstrations 
                    that help customers envision the product in their own travel experiences.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Trust Building</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    Strategic placement of customer reviews, guarantees, and quality certifications 
                    throughout the purchase journey to build confidence at every step.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Frictionless Commerce</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    Streamlined checkout process with multiple payment options, guest checkout, 
                    and mobile-optimized forms that convert browsers into buyers.
                  </p>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Design Process</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">1. Research & Discovery</h3>
                  <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <p>
                      I began by analyzing the travel accessories market and conducting user interviews 
                      with frequent travelers. This revealed key insights about purchase motivations 
                      and pain points in the current market.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">2. Information Architecture</h3>
                  <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <p>
                      Mapped out the entire customer journey from awareness to post-purchase, 
                      identifying opportunities to reduce friction and build trust at each touchpoint.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">3. Visual Design</h3>
                  <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <p>
                      Created a design system that balances premium aesthetics with accessibility, 
                      ensuring the interface feels luxurious while remaining highly functional 
                      across all devices.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Implementation */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Technical Implementation</h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-8">
                <p>
                  The platform was built using modern web technologies to ensure fast loading times, 
                  smooth interactions, and excellent SEO performance.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl p-8 mb-8">
                <h3 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-zinc-100">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/tech-icons/next.svg"
                        alt="Next.js"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-zinc-700 dark:text-zinc-300">Next.js 14</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/tech-icons/typescript.svg"
                        alt="TypeScript"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-zinc-700 dark:text-zinc-300">TypeScript</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/tech-icons/tailwind.svg"
                        alt="Tailwind CSS"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-zinc-700 dark:text-zinc-300">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/tech-icons/supabase.svg"
                        alt="Supabase"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-zinc-700 dark:text-zinc-300">Supabase</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Results & Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">2.3x</div>
                  <div className="text-lg text-zinc-600 dark:text-zinc-400">Conversion Rate Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">45%</div>
                  <div className="text-lg text-zinc-600 dark:text-zinc-400">Bounce Rate Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">4.8/5</div>
                  <div className="text-lg text-zinc-600 dark:text-zinc-400">User Satisfaction Score</div>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  The new platform exceeded all initial performance targets. The combination of 
                  improved user experience, premium visual design, and technical optimization 
                  resulted in significant business impact.
                </p>
                
                <p>
                  Post-launch user feedback consistently highlighted the intuitive navigation, 
                  trustworthy product presentation, and smooth checkout process as key factors 
                  in their purchase decisions.
                </p>
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Key Learnings</h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  This project reinforced the importance of understanding customer psychology 
                  in e-commerce design. Small details like product image quality, review placement, 
                  and checkout flow optimization can have outsized impacts on conversion rates.
                </p>
                
                <p>
                  The success of this project has informed my approach to subsequent e-commerce 
                  projects, particularly the emphasis on building trust through design and the 
                  critical importance of mobile-first optimization.
                </p>
              </div>
            </section>

          </article>

          {/* Navigation to other projects */}
          <div className="mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                Back to all projects
              </Link>
              
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Next: EcoTrack Project →
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
              Explore more of my work or get in touch.
            </p>
            <Link href="/projects" className="text-sky-600 dark:text-sky-400 font-medium hover:underline">
              View All Projects
            </Link>
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default CaseStudyPage; 