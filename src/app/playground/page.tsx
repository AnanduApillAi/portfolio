import Link from 'next/link';
import ClayPreview from '@/components/ClayPreview';

const PlaygroundPage = () => {
  const playgroundItems = [
    {
      id: 'clay-sculpting',
      title: '3D Clay Sculpting',
      description: 'Interactive 3D clay modeling playground built with Three.js',
      category: 'Creative Coding',
      status: 'Available',
      component: <ClayPreview />
    }
    // More playground items will be added here later
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 py-8">
        
        <main className="mt-8">
          {/* Navigation */}
          <div className="mb-12">
            <Link
              href="/"
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
              Back to home
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4">Playground</h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl">
              A collection of experimental projects and creative coding experiments. 
              Sometimes the best learning happens when you're just having fun.
            </p>
          </div>

          {/* Playground Items */}
          <div className="space-y-12">
            {playgroundItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
              >
                {/* Item Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="inline-flex items-center gap-2">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Category:</span>
                        <span className="text-zinc-600 dark:text-zinc-400">{item.category}</span>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Status:</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          item.status === 'Available' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        }`}>
                          {item.status}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Component */}
                <div className="max-w-md">
                  {item.component}
                </div>

                {/* Fun Footer */}
                <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
                    Built with curiosity and a lot of coffee ☕
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                More Experiments Coming Soon
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                I'm always tinkering with new ideas. Check back soon for more interactive experiments!
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <Link
                href="/"
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
                Back to home
              </Link>
              
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Playground • Experiments & Fun
              </div>
            </div>
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default PlaygroundPage; 