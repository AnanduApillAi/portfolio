import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialLinks from '@/components/SocialLinks';
import ProjectsSection from '@/components/ProjectsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ImpactSection from '@/components/ImpactSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Header />
        <main>
          <HeroSection />
          <SocialLinks />
          <ProjectsSection />
          <CaseStudiesSection />
          <TestimonialsSection />
          <ImpactSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
