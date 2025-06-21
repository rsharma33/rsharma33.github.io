'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Ensure direct import
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import { getClassByThemeMode } from '@/utils/utils';

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
            gap: 3,
            color: 'inherit'
          }}
        >
          {/* Left: Image + Badge */}
          <Box sx={{ 
            flexBasis: { md: 340 }, 
            flexGrow: 0, 
            flexShrink: 0, 
            maxWidth: { md: 340 }, 
            minWidth: { md: 300 }, 
            display: 'flex', 
            justifyContent: 'center', 
            position: 'relative' 
          }}>
            <Box sx={{ position: 'relative', width: 'auto', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', backgroundColor: getClassByThemeMode('grey.900', 'white'), left: 0, top: 30, zIndex: 1 }} />
              <Image
                src="/assets/summary-pic.png"
                alt="Profile"
                width={410}
                height={420}
                style={{ borderRadius: 16, position: 'relative', zIndex: 2, objectFit: 'cover' }}
              />
              {/* Experience Badge */}
              <Card sx={{ position: 'absolute', left: -30, bottom: 16, backgroundColor: 'error.main', color: '#fff', pl: 3, pr: 3, pt: 2, pb: 2, borderRadius: 3, boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', transform: 'rotate(-12deg)', zIndex: 3, minWidth: 160 }}>
                <StarIcon fontSize="large" sx={{ mr: 1 }} />
                <Box>
                  <Typography variant="h6" fontWeight={700} lineHeight={1}>
                    18+
                  </Typography>
                  <Typography variant="body2" fontWeight={500} letterSpacing={1}>
                    YEARS EXPERIENCE
                  </Typography>
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
              <Box component="span" color="inherit" fontWeight={900}>Over </Box>
              <Box component="span" color="error.main" fontWeight={900}>twenty five<br />years of designing.</Box>
            </Typography>
            <Typography variant="body1" color="inherit" mb={2}>
              Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.<br />
              Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui
            </Typography>
            <Button
              variant="outlined"
              color="error"
              size="large"
              endIcon={<DownloadIcon />}
              sx={{ fontWeight: 700, px: 4, py: 1.5, borderWidth: 2, borderRadius: 0 }}
            >
              DOWNLOAD RESUME
            </Button>
          </Box>
          {/* Right: Stats Card */}
          <Box sx={{ 
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
