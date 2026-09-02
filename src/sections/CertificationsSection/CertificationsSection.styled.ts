
const CertificationsSectionStyles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
    gap: 2,
    mt: 3,
  },
  // Colours are inherited so the cards read correctly on the inverted band.
  card: {
    p: 2.5,
    borderRadius: 0,
    bgcolor: 'transparent',
    color: 'inherit',
    borderColor: 'currentColor',
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    color: 'primary.main',
    mt: 0.25,
    flexShrink: 0,
  },
  meta: {
    mt: 0.5,
    opacity: 0.7,
  },
  credential: {
    display: 'block',
    mt: 0.5,
    opacity: 0.7,
  },
  actions: {
    mt: 1.5,
  },
  link: {
    borderRadius: 0,
  },
};

export { CertificationsSectionStyles };
export default CertificationsSectionStyles;
