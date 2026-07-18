import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="bg-[#010101] text-[#abbbbb] overflow-hidden">
      <Navigation />
      <main className="flex flex-col">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
