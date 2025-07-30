'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import skillsData from '@/config/data/skills.json';

import { SkillsSectionStyles as skillsCss } from '@/styles/styles'; // Adjust the import path as necessary

export default function SkillsSection() {
  const categories = skillsData as Array<{ category: string; skills: Array<{ name: string; percent: number }> }>;

  return (
    <Box component="section" id="skills-section" className={'section-wrapper'} sx={skillsCss.section}>
      <Container maxWidth="lg" sx={skillsCss.container}>
        <Box id="skills">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={skillsCss.title}
          >
            Skills
          </Typography>
          <Divider sx={skillsCss.divider} />
          <Grid container spacing={4}>
            {categories.map((cat) => (
              <Box key={cat.category} sx={skillsCss.gridItem}>
                <Typography variant="h5" sx={skillsCss.category}>
                  {cat.category}
                </Typography>
                {cat.skills.map((skill) => (
                  <Box key={skill.name} sx={skillsCss.skillRow}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                      <Typography variant="body1" sx={skillsCss.skillName}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body1" sx={skillsCss.skillPercent}>
                        {skill.percent}%
                      </Typography>
                    </Box>
                    <Box sx={skillsCss.barBg}>
                      <Box sx={{ ...skillsCss.barFill, width: `${skill.percent}%` }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
