'use client';

import ClayPlayground from '@/components/ClayPlayground';

export default function ClayPlaygroundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            3D Clay Playground
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Sculpt, paint, and create with our advanced 3D clay modeling tools. 
            Use various brushes to shape your digital clay with realistic physics and mirror sculpting.
          </p>
        </div>
        
        <div className="flex justify-center">
          <ClayPlayground />
        </div>
      </div>
    </div>
  );
} 