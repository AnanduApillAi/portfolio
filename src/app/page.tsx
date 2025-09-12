import HeroSection from '@/components/HeroSection';
import SocialLinks from '@/components/SocialLinks';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 py-8">
        <main data-scroll-target>
          <HeroSection />
          <SocialLinks />
          <ExperienceSection />
          
          
          
          <ProjectsSection />
        </main>
      </div>
    </div>
  );
}
