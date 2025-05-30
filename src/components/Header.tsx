import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ModeSwitch from './ModeSwitch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Qualification', to: 'qualification' },
  { label: 'Portfolio', to: 'projects' },
];

export default function Header() {
  // Smooth scroll handler
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          {/* Logo/Brand */}
          <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', minWidth: 120 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
             UI Coder
            </Typography>
          </Box>
          {/* Centered Links */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
            {navLinks.map(link => (
              link.label === 'Qualification' ? (
                <Box key={link.to} sx={{ position: 'relative', display: 'inline-block', mx: 1 }}>
                  <Button
                    color="inherit"
                    endIcon={<KeyboardArrowDownIcon />}
                    onClick={handleMenuOpen}
                    sx={{
                      fontWeight: 500,
                      position: 'relative',
                      zIndex: 1,
                      px: 2,
                      '&:hover .nav-underline': {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    {link.label}
                    <Box
                      className="nav-underline"
                      sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: 2,
                        width: '100%',
                        height: '3px',
                        bgcolor: 'error.main',
                        zIndex: 0,
                        borderRadius: 1,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                        pointerEvents: 'none',
                      }}
                    />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{ 'aria-labelledby': 'qualification-button' }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    <MenuItem onClick={handleMenuClose}>B.Tech in Computer Science</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Certified Web Developer</MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Box key={link.to} sx={{ position: 'relative', display: 'inline-block', mx: 1 }}>
                  <Button
                    color="inherit"
                    onClick={handleScroll(link.to)}
                    sx={{
                      fontWeight: 500,
                      position: 'relative',
                      zIndex: 1,
                      px: 2,
                      '&:hover .nav-underline': {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    {link.label}
                    <Box
                      className="nav-underline"
                      sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: 2,
                        width: '100%',
                        height: '3px',
                        bgcolor: 'error.main',
                        zIndex: 0,
                        borderRadius: 1,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                        pointerEvents: 'none',
                      }}
                    />
                  </Button>
                </Box>
              )
            ))}
          </Box>
          {/* Mode Switch on right */}
          <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', minWidth: 48 }}>
            <ModeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}