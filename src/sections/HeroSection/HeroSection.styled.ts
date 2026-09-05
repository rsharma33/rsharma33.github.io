import { styled } from '@mui/material/styles';

const HeroSectionStyles = {
  heroBox: {
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 5 },
  },
  left: {
    flex: 1,
    minWidth: 0,
    fontFamily: 'Rubik, sans-serif', // Added fontFamily to root

    h1: {
      fontWeight: 900,
      fontFamily: 'inherit', // Use inherited fontFamily from root
      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem', lg: '6.5rem' },
    }, 
    name: {
      display: 'block',
      fontWeight: 900,
      fontFamily: 'inherit', // Use inherited fontFamily from root
      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem', lg: '6.5rem' },
      lineHeight: 1.05,   
      WebkitTextStroke: '2px rgb(255, 255, 255)',
      color:'rgb(7, 7, 7)',
      textShadow: '0 2px 8px rgb(36, 33, 33)'
    },
    subtitle: {
      fontWeight: 400,
      mt: 2,
      fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
      fontFamily: 'inherit', // Use inherited fontFamily from root
    }
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    minWidth: 0,
  }
};

const HeroBox = styled('section')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: 6,
}));
 
const HeroImageWrapper = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.error.main,
  boxShadow: theme.shadows[4],
}));

const heroImgStyle: React.CSSProperties = {
  width: '534px',
  height: '560px',
  borderRadius: '15px',
  objectFit: 'cover',
  filter: 'white',
  display: 'block',
};

export { HeroBox, HeroSectionStyles, HeroImageWrapper, heroImgStyle };