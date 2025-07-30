'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import { getClassByThemeMode } from '@/utils/utils';
import { BTN } from '@/styles/styles';

export default function AboutSection() {
  return (
    <Box component="section" id="about-section" sx={{ py: { xs: 2, md: 4 } }} className={getClassByThemeMode('section-wrapper darkBG', 'section-wrapper lightBG')}>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            color: 'inherit'
          }}
        >
          {/* Left: Image + Badge */}
          <Box sx={{ 
            flexBasis: { md: 340 }, 
            flexGrow: 0, 
            flexShrink: 0,  
            display: 'flex', 
            justifyContent: 'center', 
            position: 'relative' 
          }}>
            <Box sx={{ position: 'relative', width: 'auto', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
              src="/assets/developer.svg"
              alt="Experience"
              width={380}
              height={420}
              style={{
                borderRadius: 16,
                position: 'relative',
                zIndex: 2,
                objectFit: 'cover',
                filter: getClassByThemeMode('none', 'invert(1)')
              }}
              />
              {/* Experience Badge */}
              <Card sx={{ position: 'absolute', left: -30, bottom: 16, backgroundColor: 'error.main', color: '#fff', pl: 3, pr: 3, pt: 2, pb: 2, borderRadius: 3, boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', transform: 'rotate(-12deg)', zIndex: 3, minWidth: 160 }}>
              <StarIcon fontSize="large" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="h6" fontWeight={700}>18+</Typography>
                <Typography variant="body2" fontWeight={500} letterSpacing={1}>YEARS EXPERIENCE</Typography>
              </Box>
              </Card>
            </Box>
          </Box>
          {/* Center: Headline, Description, Button */}
          <Box sx={{ 
            flexBasis: { md: '50%' }, 
            minWidth: 0 
          }}>
            <Typography variant="h3" component="h2" fontWeight={700} mb={2}>
              <Box component="span" color="inherit" fontWeight={900}>Over 18+ years</Box>
              <Box component="span" color="error.main" fontWeight={900}><br />in Web development.</Box>
            </Typography>
            <Typography variant="body1" color="inherit" mb={2}>
              I'm a FullStack Developer, specializing in Frontend development. I have extensive experience with web technologies including Node, Express, Webpack, TypeScript, React, Redux, Tailwind, SASS and Bootstrap, and a strong focus on cross-browser compatibility and performance tuning.
            </Typography>
            <Button variant="outlined" color="error" size="large" endIcon={<DownloadIcon />} sx={{ ...BTN }}>
              DOWNLOAD RESUME
            </Button>
          </Box>
          {/* Right: Stats Card */}
          {/* <Box sx={{ 
            color: getClassByThemeMode('white', 'black'), 
            flexBasis: { md: 260 }, 
            flexGrow: 0, 
            flexShrink: 0, 
            maxWidth: { md: 260 }, 
            minWidth: { md: 220 }
          }}>
            <Card sx={{ backgroundColor: getClassByThemeMode('grey.900', 'white'), color: 'inherit', p: 4, borderRadius: 0, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight={700}>14+</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Awards Won</Typography>
              </Box>
              <Divider sx={{ bgcolor: 'grey.800', my: 1, width: '60%' }} />
              <Box textAlign="center" my={4}>
                <Typography variant="h4" fontWeight={700}>1.2k</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Happy Clients</Typography>
              </Box>
              <Divider sx={{ bgcolor: 'grey.800', my: 1, width: '60%' }} />
              <Box textAlign="center" mt={4}>
                <Typography variant="h4" fontWeight={700}>3.5k</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Jobs done</Typography>
              </Box>
            </Card>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
}
