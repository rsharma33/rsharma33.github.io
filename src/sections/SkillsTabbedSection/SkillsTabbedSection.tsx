'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import skillsData from '@/config/data/skills.json';
import { skillIcons } from '@/components/skillIcons';
import { SkillsSectionStyles as skillsCss } from '../SkillsSection/SkillsSection.styled';
import { SectionWrapper, sectionTitle, sectionContainer } from '@/styles/styles';
import { SkillsTabbedSectionStyles as tabbedCss } from './SkillsTabbedSection.styled';
import { Skill, SkillCategory } from '@/types';

const categories = skillsData as SkillCategory[];

export default function SkillsTabbedSection() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const active = categories[tabIndex];

  return (
    <SectionWrapper id="skills-tabbed-section" className={'section-wrapper'}>
      <Container maxWidth="lg" sx={sectionContainer}>
        <Box>
          <Typography variant="h3" component="h2" sx={sectionTitle}>
            Skills (Tabbed View)
          </Typography>
          <Divider sx={skillsCss.divider} />

          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={tabbedCss.tabs}
          >
            {categories.map((cat: SkillCategory) => (
              <Tab key={cat.category} label={cat.category} />
            ))}
          </Tabs>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {active.skills.map((skill: Skill) => (
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
      </Container>
    </SectionWrapper>
  );
}
