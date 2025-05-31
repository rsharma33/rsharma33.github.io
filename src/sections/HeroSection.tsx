import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const classes = {
  root: {
    mt: 4,
    mb: 4,
  },
  heroBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 6,
    gap: { xs: 4, md: 5 },
  },
  left: {
    flex: 1,
    minWidth: 0,
  },
  h1: {
    fontWeight: 900,
    fontFamily: 'Rubik, sans-serif',
    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem', lg: '6.5rem' },
    lineHeight: 1.05,
    mb: 2,
    letterSpacing: '-0.04em',
  },
  name: {
    display: 'block',
    fontWeight: 900,
    fontFamily: 'Rubik, sans-serif',
    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem', lg: '6.5rem' },
    lineHeight: 1.05,
    letterSpacing: '-0.04em',    
    WebkitTextStroke: '2px rgb(255, 255, 255)',
    color:'rgb(7, 7, 7)',
    textShadow: '0 2px 8px rgb(36, 33, 33)'
  },
  title: {
    display: 'block',
    fontWeight: 900,
    fontFamily: 'Rubik, sans-serif',
    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem', lg: '6.5rem' },
    lineHeight: 1.05,
    letterSpacing: '-0.04em',
    textShadow: '0 2px 8px rgba(0,0,0,0.18)',
    color: 'inherit',
  },
  subtitle: {
    fontWeight: 400,
    mb: 0,
    mt: 3,
    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
    lineHeight: 1.5,
    letterSpacing: 0.01,
    fontFamily: 'Rubik, Arial, sans-serif',
  },
  buttonRow: {
    display: 'flex',
    gap: 2,
    mt: 5,
    flexWrap: 'wrap',
  },
  redButton: {
    bgcolor: 'error.main',
    color: '#fff',
    fontWeight: 700,
    fontFamily: 'Rubik, Arial, sans-serif',
    fontSize: { xs: '1rem', md: '1.1rem' },
    px: 3.5,
    py: 1.5,
    borderRadius: 0,
    boxShadow: 2,
    '&:hover': { bgcolor: 'error.dark' },
    textTransform: 'none',
  },
  darkButton: {
    bgcolor: 'background.paper',
    color: 'text.primary',
    fontWeight: 700,
    fontFamily: 'Rubik, Arial, sans-serif',
    fontSize: { xs: '1rem', md: '1.1rem' },
    px: 3.5,
    py: 1.5,
    borderRadius: 0,
    boxShadow: 2,
    border: '2px solid #222',
    ml: 1,
    '&:hover': { bgcolor: 'grey.900', color: '#fff' },
    textTransform: 'none',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 0,
  },
  imageWrapper: {
    // width: { xs: 220, sm: 300, md: 400 },
    // height: { xs: 280, sm: 360, md: 440 },
    borderRadius: 3,
    // overflow: 'hidden',
    bgcolor: 'error.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 3,
  },
};

const heroImgStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  marginLeft: -100,
  objectFit: 'cover',
  filter: 'grayscale(1)',
  display: 'block',
};

const HeroSection: React.FC = () => (
  <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
    <Container maxWidth="lg" sx={classes.root}>
      <Box id="home" sx={classes.heroBox}>
        {/* Left: Text */}
        <Box sx={classes.left}>
          <Typography variant="h1" sx={classes.h1}>
            Hi, I'm
            <Box component="span" sx={classes.name}>
              Rajesh!
            </Box>
            <Box component="span" sx={classes.title}>
              FullStack
              <br />
              Developer.
            </Box>
          </Typography>
          <Typography variant="h6" sx={classes.subtitle}>
            I'm a Phoenix, Arizona based web designer & a core frontend developer with 25+ years of experience
          </Typography>
          <Box sx={classes.buttonRow}>
            <Box component="a" href="#contact" sx={{ textDecoration: 'none' }}>
              <Box component="button" sx={classes.redButton}>HAVING A PROJECT?</Box>
            </Box>
            <Box component="a" href="#works" sx={{ textDecoration: 'none' }}>
              <Box component="button" sx={classes.darkButton}>MY WORKS</Box>
            </Box>
          </Box>
        </Box>
        {/* Right: Image */}
        <Box sx={classes.right}>
          <Box sx={classes.imageWrapper}>
            <img
              src="/assets/hero-image.png"
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
