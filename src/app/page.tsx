import * as React from 'react';

import { appConfig } from '@/config/AppConfig';
import ExperienceSection from '../sections/ExperienceSection/ExperienceSection';
import SkillsSection from '../sections/SkillsSection/SkillsSection';
import SkillsTabbedSection from '../sections/SkillsTabbedSection/SkillsTabbedSection';
import ProjectsSection from '../sections/ProjectsSection/ProjectsSection';
import GithubProjectsSection from '../sections/GithubProjectsSection/GithubProjectsSection';
import AboutSection from '../sections/AboutSection/AboutSection';
import QualificationSection from '../sections/QualificationSection/QualificationSection';
import CertificationsSection from '../sections/CertificationsSection/CertificationsSection';
import HeroSection from '../sections/HeroSection/HeroSection';

export default function Home() {
  const { heroSection, aboutSection, skillsSection, skillsTabbedSection, experienceSection, projectsSection, githubProjectsSection, certificationSection, qualificationSection, contactSection } = appConfig.sections;

  return (
    <>
      { heroSection && <HeroSection />}
      { aboutSection && <AboutSection />}
      { skillsSection && <SkillsSection />}
      { skillsTabbedSection && <SkillsTabbedSection />}
      { experienceSection && <ExperienceSection />}
      { qualificationSection && <QualificationSection />}
      { certificationSection && <CertificationsSection />}
      { projectsSection && <ProjectsSection />}
      { githubProjectsSection && <GithubProjectsSection />}
    </>
  );
}