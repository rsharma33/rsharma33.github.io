'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import skillsData from '@/config/data/skills.json';

export default function SkillsSection() {
  const categories = skillsData as Array<{ category: string; skills: Array<{ name: string; percent: number }> }>;

  return (
    <Box component="section" id="skills-section" className={'section-wrapper'}>
      <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4
      }}
      >
      <Box id="skills">
        <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          color: 'error.main',
          fontWeight: 700,
          fontFamily: 'inherit',
          mb: 3,
          fontSize: { xs: '2rem', md: '2.8rem' },
        }}
        >
        Skills
        </Typography>
        <Divider sx={{ mb: 4, borderColor: '#e7dcd6' }} />
        <Grid container spacing={4}>
        {categories.map((cat) => (
          <Box 
        key={cat.category}
        sx={{ 
          flexBasis: { xs: '100%', md: '25%' },
          maxWidth: { xs: '100%', md: '25%' },
          padding: 2
        }}
      >
          <Typography
            variant="h5"
            sx={{
            fontWeight: 700,
            mb: 3,
            letterSpacing: 1,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            textTransform: 'uppercase',
            }}
          >
            {cat.category}
          </Typography>
          {cat.skills.map((skill) => (
            <Box key={skill.name} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                fontSize: '1rem',
                mr: 2,
                whiteSpace: 'nowrap',
              }}
              >
              {skill.name}
              </Typography>
              <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                minWidth: 36,
                textAlign: 'right',
                color: 'error.main',
              }}
              >
              {skill.percent}%
              </Typography>
            </Box>
            <Box
              sx={{
              width: '100%',
              height: 5,
              bgcolor: '#f3e5df',
              borderRadius: 2,
              overflow: 'hidden',
              }}
            >
              <Box
              sx={{
                width: `${skill.percent}%`,
                height: '100%',
                bgcolor: 'error.main',
                borderRadius: 2,
                transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
              }}
              />
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
