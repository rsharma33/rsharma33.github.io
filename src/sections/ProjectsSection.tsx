'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Masonry from '@mui/lab/Masonry';
import projectsData from '@/config/data/projects.json';
import Link from 'next/link';
import { Button } from '@mui/material';
import { getClassByThemeMode } from '@/utils/utils';
import { Project } from '@/types';
import { masonryHeights } from '@/config/AppConfig';

const projects: Project[] = (projectsData as any[]).slice(0, 6);

export default function ProjectsSection() {
  return (
    <Box component="section" id="portfolio-section" sx={{ py: { xs: 2, md: 4 } }} className={getClassByThemeMode('section-wrapper darkBG', 'section-wrapper lightBG')}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box id="projects" sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight={900} mb={4} sx={{ fontFamily: 'Rubik, sans-serif' }}>
            Portfolio
          </Typography>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
            {projects.map((project, idx) => (
              <Card
                key={idx}

                sx={{
                  bgcolor: 'grey.900',
                  color: 'common.white',
                  borderRadius: 0,
                  boxShadow: 3,
                  p: 0,
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  display: 'block',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    '&:hover .hoverTitle': {
                      opacity: 1,
                      pointerEvents: 'auto',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.imageLarge}
                    alt={project.Project || project.title}
                    sx={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      bgcolor: 'grey.800',
                      height: masonryHeights[idx % masonryHeights.length], // Assign height from array
                      transition: 'filter 0.3s',
                    }}
                  />
                  <Box
                    className="hoverTitle"
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(30,30,30,0.82)',
                      color: 'common.white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      pointerEvents: 'none',
                      fontFamily: 'Rubik, sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '1.2rem', sm: '1.5rem' },
                      textAlign: 'center',
                      px: 2,
                    }}
                  >
                    {project.Project || project.title}
                  </Box>
                </Box>
              </Card>
            ))}
          </Masonry>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Link href="/portfolio">
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  borderRadius: 0,
                }}
              >
                See All Projects
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
