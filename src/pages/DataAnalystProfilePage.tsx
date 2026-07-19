import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import type { ProfileMode } from "../types/profile";

interface DataAnalystProfilePageProps {
  onChangeProfile: (profile: ProfileMode) => void;
}

const DataAnalystProfilePage = ({ onChangeProfile }: DataAnalystProfilePageProps) => {
  return (
    <div className="bg-[#f7fbff] text-[#abbbbb] overflow-hidden">
      <Navigation />
      <main className="flex flex-col">
        <HeroSection profile="data-analyst" onChangeProfile={onChangeProfile} />
        <ProjectsSection profile="data-analyst" />
        <SkillsSection profile="data-analyst" />
        <AboutSection profile="data-analyst" />
        <ContactSection />
      </main>
    </div>
  );
};

export default DataAnalystProfilePage;
