import * as React from 'react';
import Container from '@mui/material/Container';
import HeroSection from '@/views/resume/sections/HeroSection';
import AboutSection from '@/views/resume/sections/AboutSection';
import SkillsSection from '@/views/resume/sections/SkillsSection';
import ExperienceSection from '@/views/resume/sections/ExperienceSection';
import QualificationSection from '@/views/resume/sections/QualificationSection';
import CertificationsSection from '@/views/resume/sections/CertificationsSection';
import ProjectsSection from '@/views/resume/sections/ProjectsSection';

export default function ClassicLayout() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <QualificationSection />
      <CertificationsSection />
      <ProjectsSection />
    </Container>
  );
}
