import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  author: string;
}

// Mock blog posts data - In a real app, this would come from a CMS or database
const blogPosts: BlogPost[] = [
  {
    slug: 'building-modern-web-apps',
    title: 'Building Modern Web Applications with Next.js',
    description: 'A deep dive into building scalable and performant web applications using Next.js, TypeScript, and modern development practices.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'TypeScript', 'Web Development'],
    author: 'Anandu A Pillai',
    content: `
# Building Modern Web Applications with Next.js

Modern web development has evolved tremendously over the past few years. With the introduction of frameworks like Next.js, building scalable and performant web applications has become more accessible than ever before.

## Why Next.js?

Next.js has revolutionized the way we build React applications by providing:

- **Server-Side Rendering (SSR)** out of the box
- **Static Site Generation (SSG)** for better performance
- **API Routes** for full-stack development
- **Automatic code splitting** for optimized loading
- **Built-in TypeScript support**

## Getting Started

Setting up a new Next.js project is straightforward:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
npm run dev
\`\`\`

This command creates a new Next.js project with TypeScript, Tailwind CSS, and ESLint configured out of the box.

## Key Features to Leverage

### 1. App Router

The new App Router in Next.js 13+ provides a more intuitive way to structure your application:

\`\`\`
app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx
\`\`\`

### 2. Server Components

Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client:

\`\`\`typescript
// This component runs on the server
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

### 3. Performance Optimization

Next.js provides several built-in optimizations:

- **Image Optimization**: Use the \`next/image\` component for automatic image optimization
- **Font Optimization**: Automatic font loading optimization
- **Bundle Analysis**: Built-in bundle analyzer to identify optimization opportunities

## Best Practices

When building with Next.js, consider these best practices:

1. **Use TypeScript** for better developer experience and fewer runtime errors
2. **Implement proper SEO** with metadata API
3. **Optimize images** using the Image component
4. **Leverage caching** for API responses
5. **Monitor performance** with built-in analytics

## Conclusion

Next.js continues to be one of the best choices for building modern web applications. Its combination of performance, developer experience, and built-in optimizations makes it an excellent framework for projects of any size.

The ecosystem around Next.js is constantly evolving, and staying up-to-date with the latest features and best practices will help you build better applications.
    `
  },
  {
    slug: 'design-systems-at-scale',
    title: 'Design Systems at Scale',
    description: 'How to build and maintain design systems that grow with your team and product, ensuring consistency across all touchpoints.',
    date: '2024-01-08',
    readTime: '12 min read',
    tags: ['Design Systems', 'UI/UX', 'Frontend'],
    author: 'Anandu A Pillai',
    content: `
# Design Systems at Scale

Building and maintaining design systems that can scale with your organization is one of the most challenging aspects of modern product development. A well-designed system can significantly improve development velocity and ensure consistency across your product.

## What is a Design System?

A design system is more than just a component library. It's a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

Key components include:
- **Design tokens** (colors, typography, spacing)
- **Component library** (buttons, forms, navigation)
- **Documentation** (usage guidelines, examples)
- **Tools and processes** (design tools, code standards)

## Building Blocks

### Design Tokens

Design tokens are the atomic elements of your design system:

\`\`\`css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
}
\`\`\`

### Component Architecture

Structure your components with scalability in mind:

\`\`\`typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  return (
    <button 
      className={\`btn btn--\${variant} btn--\${size}\`}
      {...props}
    >
      {children}
    </button>
  );
};
\`\`\`

## Scaling Challenges

As your design system grows, you'll face several challenges:

### 1. Governance
- Who makes decisions about new components?
- How do you handle breaking changes?
- What's the process for deprecating components?

### 2. Adoption
- How do you encourage teams to use the system?
- What happens when teams need something not in the system?
- How do you measure adoption success?

### 3. Maintenance
- How do you keep documentation up-to-date?
- What's your testing strategy?
- How do you handle versioning and releases?

## Best Practices

### Start Small
Begin with the most commonly used components:
- Typography system
- Color palette
- Basic buttons and form elements
- Layout components

### Documentation First
Great documentation is crucial for adoption:
- Clear usage examples
- Do's and don'ts
- Accessibility guidelines
- Code snippets

### Automation
Automate as much as possible:
- Design token generation
- Component testing
- Documentation updates
- Release processes

## Tools and Technologies

Modern design systems benefit from a robust toolchain:

- **Figma/Sketch** for design
- **Storybook** for component development
- **TypeScript** for type safety
- **Testing Library** for component testing
- **Chromatic** for visual regression testing

## Measuring Success

Track these metrics to understand your system's impact:
- **Adoption rate** across teams
- **Development velocity** improvements
- **Design consistency** scores
- **Maintenance overhead** reduction

## Conclusion

Building a design system that scales requires careful planning, strong governance, and continuous iteration. The investment pays off through improved consistency, faster development, and better user experiences.

Remember: a design system is never "done" – it's a living system that evolves with your product and organization.
    `
  },
  {
    slug: 'optimizing-web-performance',
    title: 'Optimizing Web Performance in 2024',
    description: 'Modern techniques for improving web performance, from bundle optimization to image compression and beyond.',
    date: '2024-01-02',
    readTime: '6 min read',
    tags: ['Performance', 'Optimization', 'Web Development'],
    author: 'Anandu A Pillai',
    content: `
# Optimizing Web Performance in 2024

Web performance remains one of the most critical factors for user experience and business success. With users expecting instant loading times and smooth interactions, optimizing performance has never been more important.

## Core Web Vitals

Google's Core Web Vitals provide measurable metrics for user experience:

- **Largest Contentful Paint (LCP)**: Measures loading performance
- **First Input Delay (FID)**: Measures interactivity  
- **Cumulative Layout Shift (CLS)**: Measures visual stability

## Modern Optimization Techniques

### 1. Bundle Optimization

Modern bundlers offer sophisticated optimization features:

\`\`\`javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
\`\`\`

### 2. Image Optimization

Use modern image formats and responsive loading:

\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

### 3. Critical Resource Prioritization

\`\`\`html
<link rel="preload" href="/critical.css" as="style">
<link rel="prefetch" href="/next-page.js">
<link rel="preconnect" href="https://fonts.googleapis.com">
\`\`\`

## Performance Monitoring

Use tools like:
- **Lighthouse** for auditing
- **Web Vitals** for real user monitoring
- **Bundle Analyzer** for understanding bundle size

## Conclusion

Performance optimization is an ongoing process. Start with measuring, focus on the biggest impacts, and continuously monitor your improvements.
    `
  },
  {
    slug: 'the-future-of-frontend',
    title: 'The Future of Frontend Development',
    description: 'Exploring emerging trends and technologies that are shaping the future of frontend development and user experiences.',
    date: '2023-12-20',
    readTime: '10 min read',
    tags: ['Frontend', 'Technology', 'Future'],
    author: 'Anandu A Pillai',
    content: `
# The Future of Frontend Development

Frontend development is evolving at an unprecedented pace. From new frameworks to revolutionary paradigms, the landscape continues to shift and adapt to changing user expectations and technological capabilities.

## Emerging Trends

### 1. Server Components

The rise of server components is changing how we think about rendering:

\`\`\`typescript
// Server Component - runs on the server
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetchUser(userId);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <ClientComponent data={user.preferences} />
    </div>
  );
}
\`\`\`

### 2. Edge Computing

Moving computation closer to users:

- **Edge functions** for dynamic content
- **CDN optimization** for static assets
- **Regional data processing** for compliance

### 3. WebAssembly Integration

Bringing near-native performance to the web:

\`\`\`rust
// Rust compiled to WebAssembly
#[wasm_bindgen]
pub fn process_image(data: &[u8]) -> Vec<u8> {
    // High-performance image processing
    image_processing_algorithm(data)
}
\`\`\`

## New Paradigms

### Micro-Frontends

Breaking down monolithic frontends:

- **Independent deployment** of features
- **Technology diversity** across teams
- **Scalable team organization**

### AI-Driven Development

AI is transforming how we build UIs:

- **Code generation** from designs
- **Automated testing** generation
- **Performance optimization** suggestions

## Tools of Tomorrow

### Build Tools
- **Vite** and **Turbopack** for faster builds
- **SWC** for lightning-fast compilation
- **Bun** as an all-in-one runtime

### Styling
- **CSS-in-JS** evolution
- **Atomic CSS** frameworks
- **Design tokens** standardization

## The Developer Experience

Future development will focus on:
- **Zero-config** setups
- **Instant feedback** loops
- **Seamless collaboration** between design and development

## Conclusion

The future of frontend development is bright, with new technologies making development faster, more efficient, and more enjoyable. Staying adaptable and continuously learning will be key to success in this evolving landscape.
    `
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

// Mock function to get a blog post by slug
function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Anandu A Pillai`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 py-8">
        <main>
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {post.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-zinc dark:prose-invert prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    // Handle headers
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-2xl font-bold mt-8 mb-4 first:mt-0">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-xl font-semibold mt-8 mb-4">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-lg font-semibold mt-6 mb-3">${line.slice(4)}</h3>`;
                    }
                    
                    // Handle code blocks
                    if (line.startsWith('```')) {
                      if (line === '```') {
                        return '</code></pre>';
                      }
                      const lang = line.slice(3);
                      return `<pre class="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm">`;
                    }
                    
                    // Handle inline code
                    line = line.replace(/`([^`]+)`/g, '<code class="bg-zinc-100 dark:bg-zinc-900 px-1 py-0.5 rounded text-sm">$1</code>');
                    
                    // Handle bold text
                    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                    
                    // Handle bullet points
                    if (line.startsWith('- ')) {
                      return `<li class="mb-2">${line.slice(2)}</li>`;
                    }
                    
                    // Handle regular paragraphs
                    if (line.trim() && !line.startsWith('<')) {
                      return `<p class="mb-4 leading-relaxed">${line}</p>`;
                    }
                    
                    return line;
                  })
                  .join('\n')
                  .replace(/(<li[^>]*>.*<\/li>\s*)+/g, '<ul class="list-disc pl-6 mb-4 space-y-2">$&</ul>')
              }}
            />
          </article>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all posts
              </Link>
              
              <div className="text-sm text-zinc-500 dark:text-zinc-500">
                Thanks for reading!
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
} 