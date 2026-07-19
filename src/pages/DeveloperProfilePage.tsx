import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import type { ProfileMode } from "../types/profile";

interface DeveloperProfilePageProps {
  onChangeProfile: (profile: ProfileMode) => void;
}

const DeveloperProfilePage = ({ onChangeProfile }: DeveloperProfilePageProps) => {
  return (
    <div className="bg-white text-[#abbbbb] overflow-hidden">
      <Navigation />
      <main className="flex flex-col">
        <HeroSection profile="developer" onChangeProfile={onChangeProfile} />
        <ProjectsSection profile="developer" />
        <SkillsSection profile="developer" />
        <AboutSection profile="developer" />
        <ContactSection />
      </main>
    </div>
  );
};

export default DeveloperProfilePage;
