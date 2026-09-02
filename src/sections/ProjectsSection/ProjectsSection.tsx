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
import { Project } from '@/types';
import { masonryHeights } from '@/config/AppConfig';
import ProjectCover from '@/components/ProjectCover';
import { SectionWrapper, sectionTitle, sectionContainer } from '@/styles/styles';
import { ProjectsSectionStyles as projectsCss } from './ProjectsSection.styled';

const allProjects = projectsData as Project[];

// Which projects appear on the home page is set in projects.json via
// "showOnHome"; the full set lives on /portfolio. Fall back to the first few so
// the section is never empty if nothing is flagged.
const featured = allProjects.filter((p) => p.showOnHome);
const projects: Project[] = featured.length ? featured : allProjects.slice(0, 6);

export default function ProjectsSection() {
  return (
    <SectionWrapper id="portfolio-section" className={'section-wrapper'}>
      <Container maxWidth="lg" sx={sectionContainer}>
        <Box id="projects">
          <Typography variant="h3" component="h2" sx={sectionTitle}>
            Portfolio
          </Typography>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
            {projects.map((project, idx) => (
              <Card
                key={idx}

                variant="outlined"
                sx={projectsCss.card}
              >
                <Box
                  sx={projectsCss.media}
                >
                  {project.imageLarge ? (
                    <CardMedia
                      component="img"
                      image={project.imageLarge}
                      alt={project.Project || project.title}
                      sx={projectsCss.image(masonryHeights[idx % masonryHeights.length])}
                    />
                  ) : (
                    <ProjectCover
                      project={project}
                      height={masonryHeights[idx % masonryHeights.length]}
                    />
                  )}
                  <Box
                    className="hoverTitle"
                    sx={projectsCss.hoverTitle}
                  >
                    {project.Project || project.title}
                  </Box>
                </Box>
              </Card>
            ))}
          </Masonry>
          <Box sx={projectsCss.cta}>
            <Link href="/portfolio">
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={projectsCss.ctaButton}
              >
                See All Projects
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
