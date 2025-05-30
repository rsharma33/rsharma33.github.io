import * as React from 'react';
import Container from '@mui/material/Container';
import AboutSection from '@/views/resume/sections/AboutSection';
import SkillsSection from '@/views/resume/sections/SkillsSection';
import ExperienceSection from '@/views/resume/sections/ExperienceSection';
import QualificationSection from '@/views/resume/sections/QualificationSection';
import CertificationsSection from '@/views/resume/sections/CertificationsSection';
import ProjectsSection from '@/views/resume/sections/ProjectsSection';

export default function MinimalLayout() {
  return (
    <Container maxWidth="sm" sx={{ py: 4, px: { xs: 1, sm: 2 }, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2 }}>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <QualificationSection />
      <CertificationsSection />
      <ProjectsSection />
    </Container>
  );
}
