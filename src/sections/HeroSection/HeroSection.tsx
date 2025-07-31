'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { HeroBox, HeroSectionStyles as heroCss, HeroImageWrapper, heroImgStyle } from '@/sections/HeroSection/HeroSection.styled';
import { SectionWrapper, BTN } from '@/styles/styles';
import { Button, Stack, Container, Typography } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
  <SectionWrapper className='section-wrapper' id="hero-section">
    <Container maxWidth="lg">
      <HeroBox sx={heroCss.heroBox}>
        {/* Left: Text */}
        <Box sx={heroCss.left}>
          <Typography variant="h1" sx={heroCss.left.h1}>
            Hi, I'm
            <Box component="span" sx={heroCss.left.name}>Rajesh <br/>Sharma!</Box>
          </Typography>
          <Typography variant="h6" sx={heroCss.left.subtitle}>
            A FullStack Developer with 18+ years of experience and passionate about building scalable web applications.
          </Typography>

            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3 }}>
              <Button variant="contained" color="error" size="large" href="#contact" sx={{ ...BTN }}>
                HAVING A PROJECT?
              </Button>
              <Button variant="outlined" color="inherit" size="large" href="#works" sx={{ ...BTN }}>
                MY WORKS
              </Button>
            </Stack>
        </Box>
        
        {/* Right: Image */}
        <Box sx={heroCss.right}>
          <HeroImageWrapper>
            <img src="/assets/rajesh-image.svg" alt="FullStack Developer" style={heroImgStyle} />
          </HeroImageWrapper>
        </Box>
      </HeroBox>
    </Container>
  </SectionWrapper>)
};

export default HeroSection;
