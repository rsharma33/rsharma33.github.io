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
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Social icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Qualification', to: 'qualification' },
  { label: 'Portfolio', to: 'projects' },
];

const socialLinks = [
  { icon: <GitHubIcon />, url: 'https://github.com/raajeshsharma', label: 'GitHub' },
  { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/raajeshsharma', label: 'LinkedIn' },
  // { icon: <TwitterIcon />, url: 'https://twitter.com/rsharma33', label: 'Twitter' },
];

export default function Header() {
  // Smooth scroll handler
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // close drawer on mobile after click
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Responsive drawer state
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={handleDrawerToggle}>
      {navLinks.map((link) =>
        link.label === 'Qualification' ? (
          <Box key={link.to} sx={{ mb: 1 }}>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenuOpen}
              sx={{ fontWeight: 500, width: '100%', justifyContent: 'flex-start' }}
            >
              {link.label}
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
          <Button
            key={link.to}
            color="inherit"
            onClick={handleScroll(link.to)}
            sx={{ fontWeight: 500, width: '100%', justifyContent: 'flex-start', mb: 1 }}
          >
            {link.label}
          </Button>
        )
      )}
      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        {socialLinks.map((link) => (
          <Box
            key={link.label}
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'text.primary', '&:hover': { color: 'error.main' }, fontSize: 24 }}
            aria-label={link.label}
          >
            {link.icon}
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 2 }}>
        <ModeSwitch />
      </Box>
    </Box>
  );

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          {/* Logo/Brand */}
          <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', minWidth: 120 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                fontFamily: 'Rubik, sans-serif',
              }}
            >
              UI Coder
            </Typography>
          </Box>
          {/* Hamburger for mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: 'none' } }}
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* Centered Links (desktop only) */}
          {!isMobile && (
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
              {navLinks.map((link) =>
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
              )}
            </Box>
          )}
          {/* Social Links and Mode Switch on right (desktop only) */}
          {!isMobile && (
            <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 1, minWidth: 48 }}>
              {socialLinks.map((link) => (
                <Box
                  key={link.label}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.primary',
                    mx: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: 'error.main' },
                    fontSize: 24,
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </Box>
              ))}
              <ModeSwitch />
            </Box>
          )}
        </Toolbar>
      </Container>
      {/* Drawer for mobile nav */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
