import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const PreloaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'background.default',
  zIndex: 2000,
};

export default function Preloader() {
  return (
    <Box sx={PreloaderStyle}>
      <CircularProgress />
    </Box>
  );
}
