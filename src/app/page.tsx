import * as React from 'react';

import { appConfig } from '@/config/AppConfig';
import ExperienceSection from '../sections/ExperienceSection/ExperienceSection';
import SkillsSection from '../sections/SkillsSection/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection/ProjectsSection';
import AboutSection from '../sections/AboutSection/AboutSection';
import QualificationSection from '../sections/QualificationSection/QualificationSection';
import CertificationsSection from '../sections/CertificationsSection/CertificationsSection';
import HeroSection from '../sections/HeroSection/HeroSection';

export default function Home() {
  const { heroSection, aboutSection, skillsSection, experienceSection, projectsSection, certificationSection, qualificationSection, contactSection } = appConfig.sections;

  return (
    <>
      { heroSection && <HeroSection />}
      { aboutSection && <AboutSection />}
      { skillsSection && <SkillsSection />}
      { experienceSection && <ExperienceSection />}
      { qualificationSection && <QualificationSection />}
      { certificationSection && <CertificationsSection />}
      { projectsSection && <ProjectsSection />}
    </>
  );
}