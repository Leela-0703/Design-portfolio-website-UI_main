import { HeroSection } from '../components/HeroSection';
import { DiamondNavigation } from '../components/DiamondNavigation';
import { ProjectShowcase } from '../components/ProjectShowcase';

export function Home() {
  return (
    <>
      <HeroSection />
      <ProjectShowcase />
      <DiamondNavigation />
    </>
  );
}
