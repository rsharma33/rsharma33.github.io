'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import { SvgIcon } from '@mui/material';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs } from 'react-icons/si';
import skillsData from '@/data/resume/skills.json'; 

const iconMap: Record<string, React.ReactNode> = {
  javascript: <SiJavascript color="#f7df1e" />,
  typescript: <SiTypescript color="#3178c6" />,
  react: <SiReact color="#61dafb" />,
  nodedotjs: <SiNodedotjs color="#339933" />,
  materialui: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M2 16L16 2L30 16" stroke="#007fff" strokeWidth="3"/><rect x="7" y="18" width="18" height="10" rx="2" fill="#007fff"/></g></svg>,
};

export default function SkillsSection() {
  const categories = skillsData as Array<{ category: string; skills: Array<{ name: string; level: string; icon: string }> }>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box id="skills" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {categories.map((cat, idx) => (
            <Box item xs={12} md={6} key={cat.category}>
              <Typography variant="h6" sx={{ mb: 2 }}>{cat.category}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {cat.skills.map((skill) => (
                  <Box key={skill.name} sx={{
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    borderRadius: 1,
                    p: 2,
                    minWidth: 120,
                    textAlign: 'center',
                    boxShadow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    <Typography variant="subtitle1">{skill.name}</Typography>
                    <Typography variant="caption">{skill.level}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
