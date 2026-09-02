'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import experienceData from '@/config/data/experience.json';
import { Experience, Role } from '@/types';
import { getClassByThemeMode } from '@/utils/utils';
import { SectionWrapper, sectionTitle, sectionContainer } from '@/styles/styles';
import { ExperienceSectionStyles as expCss } from './ExperienceSection.styled';

const experience = experienceData as Experience[];

export default function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience-section"
      className={getClassByThemeMode('section-wrapper darkBG', 'section-wrapper lightBG')}
    >
      <Container maxWidth="lg" sx={sectionContainer}>
        <Box id="experience">
          <Typography variant="h3" component="h2" sx={{ ...sectionTitle, mb: 1 }}>
            Experience
          </Typography>
          <Typography variant="body2" sx={expCss.subtitle}>
            Grouped by employer — promotions within a company are listed as separate roles.
          </Typography>

          <Stack spacing={3}>
            {experience.map((company: Experience) => (
              <Paper
                key={company.company}
                variant="outlined"
                sx={expCss.card}
              >
                {/* Company header */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'baseline' }}
                  spacing={1}
                  sx={expCss.companyHeader}
                >
                  <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap" useFlexGap>
                    <Typography variant="h5" fontWeight={700}>
                      {company.company}
                    </Typography>
                    {company.current && (
                      <Chip
                        label="Current"
                        size="small"
                        color="primary"
                        sx={expCss.currentChip}
                      />
                    )}
                  </Stack>
                  <Typography variant="body2" sx={expCss.meta}>
                    {company.tenure} | {company.employmentType}
                  </Typography>
                </Stack>

                {/* Roles held at this company, newest first */}
                {company.roles.map((role: Role, rIdx: number) => (
                  <Box
                    key={role.designation}
                    sx={expCss.role(rIdx === 0, rIdx < company.roles.length - 1)}
                  >
                    <Typography variant="subtitle1" fontWeight={700}>
                      {role.designation}
                    </Typography>
                    <Typography variant="body2" sx={expCss.roleMeta}>
                      {role.tenure} | {role.location}
                    </Typography>

                    <Box component="ul" sx={expCss.highlightList}>
                      {role.highlights.map((highlight: string, i: number) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          sx={expCss.highlight}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>

                    <Stack direction="row" spacing={0.75} sx={expCss.skillRow} flexWrap="wrap" useFlexGap>
                      {role.skills.map((skill: string) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          variant="outlined"
                          sx={expCss.skillChip}
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
