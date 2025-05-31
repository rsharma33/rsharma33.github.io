import * as React from 'react';

// Importing section components
import ExperienceSection from '../sections/ExperienceSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import AboutSection from '../sections/AboutSection';
import QualificationSection from '../sections/QualificationSection';
import CertificationsSection from '../sections/CertificationsSection';
import HeroSection from '../sections/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <QualificationSection /> */}
      <CertificationsSection />      
      <ProjectsSection />
    </>
  );
}