import * as React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import HeroSection from '@/views/resume/sections/HeroSection';
import AboutSection from '@/views/resume/sections/AboutSection';
import SkillsSection from '@/views/resume/sections/SkillsSection';
import ExperienceSection from '@/views/resume/sections/ExperienceSection';
import QualificationSection from '@/views/resume/sections/QualificationSection';
import CertificationsSection from '@/views/resume/sections/CertificationsSection';
import ProjectsSection from '@/views/resume/sections/ProjectsSection';

export default function ModernLayout() {
  return (
    <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, md: 6 }, bgcolor: 'background.default', borderRadius: 4, boxShadow: 6 }}>
      <HeroSection />
      <Divider sx={{ my: 4 }} />
      <AboutSection />
      <Divider sx={{ my: 4 }} />
      <SkillsSection />
      <Divider sx={{ my: 4 }} />
      <ExperienceSection />
      <Divider sx={{ my: 4 }} />
      <QualificationSection />
      <Divider sx={{ my: 4 }} />
      <CertificationsSection />
      <Divider sx={{ my: 4 }} />
      <ProjectsSection />
    </Container>
  );
}
