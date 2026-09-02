
const GithubProjectsSectionStyles = {
  subtitle: {
    mb: 3,
    opacity: 0.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
    gap: 2.5,
  },
  card: {
    p: 2.5,
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  },
  cardHeader: {
    mb: 1,
  },
  title: {
    fontWeight: 700,
    flex: 1,
    minWidth: 0,
  },
  forkChip: {
    fontSize: '0.68rem',
    height: 22,
    borderRadius: 0,
  },
  description: {
    flex: 1,
    lineHeight: 1.7,
    opacity: 0.8,
  },
  tagRow: {
    mt: 2,
  },
  tagChip: {
    fontSize: '0.7rem',
    height: 22,
    borderRadius: 0,
  },
  actions: {
    mt: 2,
  },
  cta: {
    mt: 4,
    textAlign: 'center',
  },
  ctaButton: {
    borderRadius: 0,
  },
};

export { GithubProjectsSectionStyles };
export default GithubProjectsSectionStyles;
