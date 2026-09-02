'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { FaGithub, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '@/config/data/githubProjects.json';
import { GithubProject } from '@/types';
import { SectionWrapper, sectionTitle, sectionContainer } from '@/styles/styles';
import { GithubProjectsSectionStyles as ghCss } from './GithubProjectsSection.styled';

const projects = projectsData as GithubProject[];

export default function GithubProjectsSection() {
  return (
    <SectionWrapper id="github-projects-section" className={'section-wrapper'}>
      <Container maxWidth="lg" sx={sectionContainer}>
        <Box id="github-projects">
          <Typography variant="h3" component="h2" sx={{ ...sectionTitle, mb: 1 }}>
            Projects
          </Typography>
          <Typography variant="body2" sx={ghCss.subtitle}>
            Open-source work and experiments. Forks are marked as such.
          </Typography>

          <Box
            sx={ghCss.grid}
          >
            {projects.map((project: GithubProject) => (
              <Paper
                key={project.title}
                variant="outlined"
                sx={ghCss.card}
              >
                <Stack direction="row" alignItems="center" spacing={1} sx={ghCss.cardHeader}>
                  <Typography variant="subtitle1" sx={ghCss.title}>
                    {project.title}
                  </Typography>
                  {project.fork && (
                    <Chip
                      icon={<FaCodeBranch size={11} />}
                      label="Fork"
                      size="small"
                      variant="outlined"
                      sx={ghCss.forkChip}
                    />
                  )}
                </Stack>

                <Typography variant="body2" sx={ghCss.description}>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={0.75} sx={ghCss.tagRow} flexWrap="wrap" useFlexGap>
                  {project.tags.map((tag: string) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={ghCss.tagChip}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} sx={ghCss.actions}>
                  <Button
                    size="small"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FaGithub />}
                  >
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="small"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<FaExternalLinkAlt size={12} />}
                    >
                      Live
                    </Button>
                  )}
                </Stack>
              </Paper>
            ))}
          </Box>

          <Box sx={ghCss.cta}>
            <Button
              component={Link}
              href="/portfolio"
              variant="outlined"
              sx={ghCss.ctaButton}
            >
              See All Projects
            </Button>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
