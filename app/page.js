'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </div>
  );
}
