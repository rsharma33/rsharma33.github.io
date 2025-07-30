
const SkillsSectionStyles = {
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

export { SkillsSectionStyles };
export default SkillsSectionStyles;