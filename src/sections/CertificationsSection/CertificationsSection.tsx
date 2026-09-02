'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import certificationData from '@/config/data/certifications.json';
import { Certification } from '@/types';
import { SectionWrapper, sectionTitle, sectionContainer } from '@/styles/styles';
import { CertificationsSectionStyles as certCss } from './CertificationsSection.styled';
import { getClassByThemeMode } from '@/utils/utils';

const certifications = certificationData as Certification[];

export default function CertificationsSection() {
  return (
    <SectionWrapper
      id="certifications-section"
      className={getClassByThemeMode('section-wrapper darkBG', 'section-wrapper lightBG')}
    >
      <Container maxWidth="lg" sx={sectionContainer}>
        <Box id="certifications">
          <Typography variant="h3" component="h2" sx={sectionTitle}>
            Certifications
          </Typography>

          <Box
            sx={certCss.grid}
          >
            {certifications.map((cert: Certification, idx: number) => (
              <Paper
                key={idx}
                variant="outlined"
                sx={certCss.card}
              >
                <Stack direction="row" spacing={1.5} sx={{ flex: 1 }}>
                  <VerifiedIcon fontSize="small" sx={certCss.icon} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700} lineHeight={1.4}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" sx={certCss.meta}>
                      {cert.institute}
                      {cert.issued ? ` | Issued ${cert.issued}` : ''}
                      {cert.duration ? ` | ${cert.duration}` : ''}
                    </Typography>
                    {cert.credentialId && (
                      <Typography variant="caption" sx={certCss.credential}>
                        Credential ID {cert.credentialId}
                      </Typography>
                    )}
                  </Box>
                </Stack>

                {cert.url && (
                  <Box sx={certCss.actions}>
                    <Button
                      size="small"
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                      sx={certCss.link}
                    >
                      Show credential
                    </Button>
                  </Box>
                )}
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
