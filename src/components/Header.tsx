import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ModeSwitch from './ModeSwitch';
import profile from '@/lib/profile';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Social icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type NavLink = {
  label: string;
  to: string;
  /** Home resolves to "/" rather than a section hash. */
  isHome?: boolean;
  children?: { label: string; to: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', to: 'hero-section', isHome: true },
  { label: 'About', to: 'about-section' },
  { label: 'Skills', to: 'skills-section' },
  { label: 'Experience', to: 'experience-section' },
  {
    label: 'Qualification',
    to: 'qualification-section',
    children: [
      { label: 'Education', to: 'qualification-section' },
      { label: 'Certifications', to: 'certifications-section' },
    ],
  },
  { label: 'Portfolio', to: 'portfolio-section' },
];

const socialLinks = [
  { icon: <GitHubIcon />, url: 'https://github.com/raajeshsharma', label: 'GitHub' },
  { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/raajeshsharma', label: 'LinkedIn' },
  // { icon: <TwitterIcon />, url: 'https://twitter.com/rsharma33', label: 'Twitter' },
];

const logoStyle = {
  fontWeight: 700,
  fontSize: '1.5rem',
  color: 'text.primary',
  textDecoration: 'none',
  fontFamily: 'Rubik, sans-serif',
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
    setMobileOpen(false); // close drawer on mobile after click
  };

  // Home and the logo go to the site root rather than a section anchor, so the
  // URL stays clean at "/".
  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);

    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Drop any section hash left in the bar so a reload does not jump back down.
      if (window.location.hash) window.history.replaceState(null, '', '/');
    } else {
      router.push('/');
    }
  };

  // The home page renders behind a preloader, so the hash target is not in the
  // DOM on arrival — poll briefly for it instead of scrolling once and missing.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        clearInterval(timer);
      } else if (++tries > 40) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [pathname]);

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
        link.children ? (
          link.children.map((child) => (
            <Button
              key={child.to}
              color="inherit"
              onClick={handleScroll(child.to)}
              sx={{ fontWeight: 500, width: '100%', justifyContent: 'flex-start', mb: 1 }}
            >
              {child.label}
            </Button>
          ))
        ) : (
          <Button
            key={link.to}
            color="inherit"
            onClick={link.isHome ? goHome : handleScroll(link.to)}
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
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{ top: 0, bgcolor: 'background.paper', zIndex: (theme) => theme.zIndex.appBar }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          {/* Logo/Brand */}
          <Box
            component="a"
            href="/"
            onClick={goHome}
            sx={{
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              minWidth: 120,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Typography
              variant="h6"
              sx={logoStyle}
            >
              {profile.shortName}
              <Box
                component="span"
                // Drawn as a circle rather than a period: Rubik's full stop is
                // squarish, so scaling the glyph up reads as a block, not a dot.
                sx={{
                  display: 'inline-block',
                  width: '0.42em',
                  height: '0.42em',
                  ml: '0.12em',
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                }}
              />
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
                link.children ? (
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
                      {link.children?.map((child) => (
                        <MenuItem
                          key={child.to}
                          onClick={(e) => {
                            handleScroll(child.to)(e);
                            handleMenuClose();
                          }}
                        >
                          {child.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Box key={link.to} sx={{ position: 'relative', display: 'inline-block', mx: 1 }}>
                    <Button
                      color="inherit"
                      onClick={link.isHome ? goHome : handleScroll(link.to)}
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
