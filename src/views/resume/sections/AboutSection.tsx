import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AboutSection() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box id="about" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Experienced software engineer with a passion for building impactful products.
        </Typography>
      </Box>
    </Container>
  );
}
