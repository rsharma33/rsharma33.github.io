import { styled } from '@mui/material';
import { preload } from 'react-dom';

const BTN = {
    fontSize: { xs: '1rem', md: '1.1rem' },
    borderWidth: '2px',
    borderRadius: '0px',
    textDecoration: 'none',

    BTN_Row: {
      display: 'flex',
      gap: 2,
      mt: 5,
      flexWrap: 'wrap',
    },
};

const SectionWrapper = styled('section')(({ theme, className, id }) => ({
  width: '100%',
  bgcolor: theme.palette.background.default,
  marginTop: '4rem',
  marginBottom: '4rem',
  // You can use className in the component, but styled() will automatically forward it.
}));

export { BTN, SectionWrapper };