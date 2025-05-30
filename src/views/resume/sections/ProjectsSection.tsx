import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import projectsData from '@/data/resume/projects.json';

const projects: Array<{
  title: string;
  description: string;
  url: string;
}> = projectsData as any;

export default function ProjectsSection() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box id="projects" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {projects.map((project, idx) => (
            <Card key={idx} sx={{ flex: '1 1 300px', minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.url} target="_blank" rel="noopener">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
