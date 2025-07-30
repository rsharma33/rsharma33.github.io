import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', Arial, sans-serif;
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
  },
  .darkBG {
    background: #fff;
    color: #000;
    transition: background-color 0.5s;
  },
  .lightBG {
    background: #000;
    color: #fff;
    transition: background-color 0.5s;
  },
  .section-wrapper {
    width: 100%;
  }
`;

const HeroSectionStyles = {
  root: {
    mt: 4,
    mb: 4,
    fontFamily: 'Rubik, sans-serif', // Added fontFamily to root
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
    name: {
      display: 'block',
      fontWeight: 900,
      fontFamily: 'inherit', // Use inherited fontFamily from root
      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem', lg: '6.5rem' },
      lineHeight: 1.05,
      letterSpacing: '-0.04em',    
      WebkitTextStroke: '2px rgb(255, 255, 255)',
      color:'rgb(7, 7, 7)',
      textShadow: '0 2px 8px rgb(36, 33, 33)'
    }
  },
  h1: {
    fontWeight: 900,
    fontFamily: 'inherit', // Use inherited fontFamily from root
    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem', lg: '6.5rem' },
    lineHeight: 1.05,
    mb: 2,
    letterSpacing: '-0.04em',
  },
  subtitle: {
    fontWeight: 400,
    mb: 0,
    mt: 3,
    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
    lineHeight: 1.5,
    letterSpacing: 0.01,
    fontFamily: 'inherit', // Use inherited fontFamily from root
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
    fontFamily: 'inherit', // Use inherited fontFamily from root
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
    fontFamily: 'inherit', // Use inherited fontFamily from root
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
    borderRadius: 3,
    bgcolor: 'error.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 3,
  }
};

const SkillsSectionStyles = {
  section: {
    width: '100%',
    bgcolor: 'background.default',
  },
  container: {
    mt: 4,
    mb: 4,
  },
  title: {
    color: 'error.main',
    fontWeight: 700,
    fontFamily: 'inherit',
    mb: 3,
    fontSize: { xs: '2rem', md: '2.8rem' },
  },
  divider: {
    mb: 4,
    borderColor: '#e7dcd6',
  },
  gridItem: {
    flexBasis: { xs: '100%', md: '25%' },
    maxWidth: { xs: '100%', md: '25%' },
    padding: 2,
  },
  category: {
    fontWeight: 700,
    mb: 3,
    letterSpacing: 1,
    fontSize: { xs: '1.2rem', md: '1.4rem' },
    textTransform: 'uppercase',
  },
  skillRow: {
    mb: 3,
  },
  skillName: {
    fontWeight: 500,
    fontSize: '1rem',
    mr: 2,
    whiteSpace: 'nowrap',
  },
  skillPercent: {
    fontWeight: 600,
    fontSize: '1rem',
    minWidth: 36,
    textAlign: 'right',
    color: 'error.main',
  },
  barBg: {
    width: '100%',
    height: 5,
    bgcolor: '#f3e5df',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    bgcolor: 'error.main',
    borderRadius: 2,
    transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
  },
};

export { GlobalStyle, HeroSectionStyles, SkillsSectionStyles };