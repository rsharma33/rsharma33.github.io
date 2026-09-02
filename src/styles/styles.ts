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
  // No vertical margin: sections that carry a band colour must sit flush against
  // each other, otherwise the page background shows through as a white stripe.
  // Vertical rhythm comes from sectionContainer's padding instead.
  // You can use className in the component, but styled() will automatically forward it.
}));

// Section headings all follow the Portfolio section's treatment.
const sectionTitle = {
  fontFamily: 'Rubik, sans-serif',
  fontWeight: 900,
  mb: 4,
};

// Every section pads its content the same way. Padding, not margin: the bands
// that carry a background colour would not cover a collapsing margin.
const sectionContainer = {
  py: { xs: 4, md: 6 },
};

export { BTN, SectionWrapper, sectionTitle, sectionContainer };