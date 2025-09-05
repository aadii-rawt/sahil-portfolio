import HeroSection from '../components/Hero';
import MainCard from '../components/MainCard';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

const Homepage = () => {
  return (
    <div className="min-h-screen xl:max-w-[90%] mx-auto px-0 sm:px-6 py-6 lg:py-8">
      {/* Left: Main card (static on small, fixed on large) */}
      <div className="w-fit mx-auto lg:w-1/2 lg:fixed lg:top-[14%] lg:left-[8%] ">
        <MainCard />
      </div>

      {/* Right: Content (full width on small, 55% on large, auto-aligned right) */}
      <div className="w-full lg:w-[55%] lg:ml-auto mt-6 lg:mt-0">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Homepage;
