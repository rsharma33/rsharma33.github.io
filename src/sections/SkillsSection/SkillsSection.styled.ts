
const SkillsSectionStyles = {
  divider: {
    mb: 4,
    borderColor: '#e7dcd6',
  },
  categoryBlock: {
    mb: 3,
  },
  category: {
    mb: 2,
  },
  // Plain outlined chip: border and background come from the theme.
  chip: {
    fontWeight: 500,
    fontSize: '1rem',
    px: 1,
    py: 2.5,
    borderRadius: 0,
    transition: 'border-color 0.2s ease, transform 0.2s ease',
    '&:hover': {
      borderColor: 'primary.main',
      transform: 'translateY(-2px)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  },
};

export { SkillsSectionStyles };
export default SkillsSectionStyles;
