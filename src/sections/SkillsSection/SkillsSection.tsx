'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import skillsData from '@/config/data/skills.json';
import { skillIcons } from '@/components/skillIcons';
import { SkillsSectionStyles as skillsCss } from './SkillsSection.styled';
import { SectionWrapper, sectionTitle, sectionContainer } from '@/styles/styles';
import { Skill, SkillCategory } from '@/types';

const categories = skillsData as SkillCategory[];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills-section" className={'section-wrapper'}>
      <Container maxWidth="lg" sx={sectionContainer}>
        <Box>
          <Typography variant="h3" component="h2" sx={sectionTitle}>
            Skills
          </Typography>

          {categories.map((cat) => (
            <Box key={cat.category} sx={skillsCss.categoryBlock}>
              <Typography variant="h6" component="h4" fontWeight={700} sx={skillsCss.category}>
                {cat.category}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {cat.skills.map((skill: Skill) => (
                  <Chip
                    key={skill.name}
                    icon={skill.icon ? skillIcons[skill.icon] : undefined}
                    label={skill.name}
                    variant="outlined"
                    sx={skillsCss.chip}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
