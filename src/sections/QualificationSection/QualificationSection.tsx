'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SchoolIcon from '@mui/icons-material/School';
import qualificationData from '@/config/data/qualification.json';
import { Qualification } from '@/types';
import { SectionWrapper, sectionTitle, sectionContainer } from '@/styles/styles';
import { QualificationSectionStyles as qualCss } from './QualificationSection.styled';

const qualifications = qualificationData as Qualification[];

export default function QualificationSection() {
  return (
    <SectionWrapper id="qualification-section" className={'section-wrapper'}>
      <Container maxWidth="lg" sx={sectionContainer}>
        <Box id="qualification">
          <Typography variant="h3" component="h2" sx={sectionTitle}>
            Education
          </Typography>

          <Stack spacing={2} sx={qualCss.list}>
            {qualifications.map((row: Qualification, idx: number) => (
              <Paper
                key={idx}
                variant="outlined"
                sx={qualCss.card}
              >
                <Box
                  sx={qualCss.iconBox}
                >
                  <SchoolIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {row.degree}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {row.institute}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {row.year} | {row.place}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </SectionWrapper>
  );
}