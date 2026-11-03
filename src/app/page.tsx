import React from "react";
import CityParticles from "@/components/canvas/CityParticles";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-[#10b981] selection:text-black">
      {/* Three.js Interactive Particles Background */}
      <CityParticles />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
