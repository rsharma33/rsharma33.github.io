import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HeroSection: React.FC = () => (
  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Box
      id="home"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 8,
        bgcolor: 'background.default',
        borderRadius: 2,
        boxShadow: 2,
        mb: 6,
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* Left: Text */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            lineHeight: 1.1,
            color: 'common.white',
            mb: 2,
          }}
        >
          Hi, I'm{' '}
          <Box
            component="span"
            sx={{
              display: 'block',
              fontWeight: 900,
              color: 'common.white',
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            Rajesh!
          </Box>
          <Box
            component="span"
            sx={{
              display: 'block',
              fontWeight: 900,
              color: 'common.white',
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            A FullStack
            <br />
            Developer
          </Box>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'grey.300',
            fontWeight: 400,
            mb: 0,
            mt: 3,
            fontSize: { xs: '1.1rem', md: '1.35rem' },
          }}
        >
          I'm a FullStack Developer &amp; and a core frontend developer with 16+ years of experience
        </Typography>
      </Box>
      {/* Right: Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 0,
        }}
      >
        <Box
          sx={{
            width: { xs: 220, sm: 300, md: 340 },
            height: { xs: 280, sm: 360, md: 400 },
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: 'error.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 3,
          }}
        >
          <img
            src="/assets/hero-image.png"
            alt="FullStack Developer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(1)',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Box>
  </Container>
);

export default HeroSection;
