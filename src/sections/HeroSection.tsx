'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HeroSectionStyles as heroCss } from '@/styles/styles';

const heroImgStyle: React.CSSProperties = {
  width: '534px',
  height: '560px',
  borderRadius: '15px',
  objectFit: 'cover',
  filter: 'white',
  display: 'block',
};

const HeroSection: React.FC = () => (
  <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
    <Container maxWidth="lg" sx={heroCss.root}>
      <Box id="home" sx={heroCss.heroBox} component={'section'}>
        {/* Left: Text */}
        <Box sx={heroCss.left}>
          <Typography variant="h1" sx={heroCss.h1}>
            Hi, I'm
            <Box component="span" sx={heroCss.left.name}>Rajesh <br/>Sharma!</Box>
          </Typography>
          <Typography variant="h6" sx={heroCss.subtitle}>
            A FullStack Developer with 18+ years of experience and passionate about building scalable web applications.
          </Typography>
          <Box sx={heroCss.buttonRow}>
            <Box component="a" href="#contact" sx={{ textDecoration: 'none' }}>
              <Box component="button" sx={heroCss.redButton}>HAVING A PROJECT?</Box>
            </Box>
            <Box component="a" href="#works" sx={{ textDecoration: 'none' }}>
              <Box component="button" sx={heroCss.darkButton}>MY WORKS</Box>
            </Box>
          </Box>
        </Box>
        {/* Right: Image */}
        <Box sx={heroCss.right}>
          <Box sx={heroCss.imageWrapper}>
            <img
              src="/assets/rajesh-image.svg"
              alt="FullStack Developer"
              style={heroImgStyle}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default HeroSection;
