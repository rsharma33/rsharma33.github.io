import * as React from 'react';

// Importing section components
import ExperienceSection from '../views/resume/sections/ExperienceSection';
import SkillsSection from '../views/resume/sections/SkillsSection';
import ProjectsSection from '../views/resume/sections/ProjectsSection';
import AboutSection from '../views/resume/sections/AboutSection';
import QualificationSection from '../views/resume/sections/QualificationSection';
import CertificationsSection from '../views/resume/sections/CertificationsSection';
import HeroSection from '../views/resume/sections/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <QualificationSection />
      <CertificationsSection />      
      <ProjectsSection />
    </>
  );
}