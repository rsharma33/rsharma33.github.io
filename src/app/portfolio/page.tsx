'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import projectsData from '@/config/data/projects.json';
import { capitalize } from '@/utils/utils';
import { Project } from '@/types';
import ProjectCover from '@/components/ProjectCover';
import { sectionTitle } from '@/styles/styles';

const projects = projectsData as Project[];

const categories = Array.from(new Set(projects.map((p) => p.tag).filter(Boolean))) as string[];

const chipSx = { fontSize: '0.72rem', height: 22, borderRadius: 0 };

export default function PortfolioPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [tab, setTab] = React.useState(0);

  const filteredProjects =
    tab === 0 ? projects : projects.filter((p) => p.tag === categories[tab - 1]);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box id="projects">
        <Typography variant="h3" component="h1" sx={{ ...sectionTitle, mb: 1 }}>
          All Projects
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
          {projects.length} projects across {categories.map((c) => capitalize(c)).join(', ')}.
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ mb: 4 }}
        >
          <Tab label={`All (${projects.length})`} />
          {categories.map((cat) => (
            <Tab
              key={cat}
              label={`${capitalize(cat)} (${projects.filter((p) => p.tag === cat).length})`}
            />
          ))}
        </Tabs>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {filteredProjects.map((project, idx) => (
            <Card
              key={idx}
              variant="outlined"
              sx={{
                borderRadius: 0,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                  '&:hover': { transform: 'none' },
                },
              }}
            >
              <CardActionArea
                onClick={() => handleOpen(project)}
                sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
              >
                {project.imageSmall ? (
                  <Box sx={{ position: 'relative', width: '100%', height: 170 }}>
                    <Image
                      src={project.imageSmall}
                      alt={project.title ?? ''}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                ) : (
                  <ProjectCover project={project} height={170} />
                )}
                <CardContent sx={{ flexGrow: 1, width: '100%' }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.75 }}>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ flex: 1, minWidth: 0 }}>
                      {project.title}
                    </Typography>
                    {project.tag && (
                      <Chip label={capitalize(project.tag)} size="small" variant="outlined" sx={chipSx} />
                    )}
                  </Stack>

                  <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>

                  {project.techStack && project.techStack.length > 0 && (
                    <Stack direction="row" spacing={0.75} sx={{ mt: 1.75 }} flexWrap="wrap" useFlexGap>
                      {project.techStack.map((tech) => (
                        <Chip key={tech} label={tech} size="small" sx={chipSx} />
                      ))}
                    </Stack>
                  )}
                </CardContent>
              </CardActionArea>

              <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                <Button size="small" onClick={() => handleOpen(project)} sx={{ borderRadius: 0 }}>
                  Details
                </Button>
                {project.url && (
                  <Button
                    size="small"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                    sx={{ borderRadius: 0 }}
                  >
                    Visit
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          slotProps={{ paper: { sx: { borderRadius: 0 } } }}
        >
          <DialogTitle
            sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}
          >
            <Box component="span" sx={{ fontWeight: 700 }}>
              {selectedProject?.title}
            </Box>
            <IconButton onClick={handleClose} size="small" aria-label="Close details">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {selectedProject &&
              (selectedProject.imageLarge ? (
                <Box sx={{ mb: 2, position: 'relative', width: '100%', height: 240 }}>
                  <Image
                    src={selectedProject.imageLarge}
                    alt={selectedProject.title ?? ''}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              ) : (
                <Box sx={{ mb: 2 }}>
                  <ProjectCover project={selectedProject} height={240} />
                </Box>
              ))}
            <Typography variant="body2" sx={{ lineHeight: 1.8, opacity: 0.85 }}>
              {selectedProject?.description}
            </Typography>
            {selectedProject?.techStack && selectedProject.techStack.length > 0 && (
              <Stack direction="row" spacing={0.75} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
                {selectedProject.techStack.map((tech) => (
                  <Chip key={tech} label={tech} size="small" sx={chipSx} />
                ))}
              </Stack>
            )}
          </DialogContent>
          <DialogActions>
            {selectedProject?.url && (
              <Button
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                sx={{ borderRadius: 0 }}
              >
                Visit Project
              </Button>
            )}
            <Button onClick={handleClose} sx={{ borderRadius: 0 }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}
