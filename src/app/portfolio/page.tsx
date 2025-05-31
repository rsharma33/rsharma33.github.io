'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Image from 'next/image';
import projectsData from '@/config/data/projects.json';
import { getClassByThemeMode } from '@/utils/utils';

// Update the project type to match the new data model
type Project = {
  title: string;
  description: string;
  url?: string;
  imageSmall?: string;
  imageLarge?: string;
  tag?: string;
  techStack?: string[];
};

const projects: Project[] = projectsData as any;

export default function ProjectsSection() {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [tab, setTab] = React.useState(0);

  // Get unique tags/categories
  const categories = Array.from(new Set(projects.map(p => p.tag).filter(Boolean)));
  const allTabs = ['All', ...categories];

  // Filter projects by selected tab
  const filteredProjects = tab === 0
    ? projects
    : projects.filter(p => p.tag === categories[tab - 1]);

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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box id="projects" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 3 }}
        >
          {allTabs.map((cat, idx) => (
            <Tab key={cat} label={cat} />
          ))}
        </Tabs>
        <Grid container spacing={3}>
          {filteredProjects.map((project, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ width: '100%', maxWidth: 340, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 0 }} className={getClassByThemeMode('darkBG', 'lightBG')}>
                {project.imageSmall && (
                  <Box sx={{ position: 'relative', width: '100%', height: 160 }}>
                    <Image
                      src={project.imageSmall}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                    />
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="inherit" sx={{ mb: 1 }}>
                    {project.description}
                  </Typography>
                  {project.techStack && project.techStack.length > 0 && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                      {project.techStack.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" color="primary" />
                      ))}
                    </Box>
                  )}
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleOpen(project)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {selectedProject?.title}
            <IconButton onClick={handleClose} size="small" sx={{ ml: 2 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {selectedProject?.imageLarge && (
              <Box sx={{ mb: 2, position: 'relative', width: '100%', height: 220 }}>
                <Image
                  src={selectedProject.imageLarge}
                  alt={selectedProject.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: 0 }}
                />
              </Box>
            )}
            <Typography variant="subtitle1" gutterBottom>
              {selectedProject?.description}
            </Typography>
            {selectedProject?.techStack && selectedProject.techStack.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {selectedProject.techStack.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" color="primary" />
                ))}
              </Box>
            )}
            {selectedProject?.url && (
              <Button href={selectedProject.url} target="_blank" rel="noopener" sx={{ mt: 2 }}>
                Visit Project
              </Button>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}
