
const ExperienceSectionStyles = {
  subtitle: {
    mb: 3,
    opacity: 0.7,
  },
  // Colours are inherited so the cards read correctly on the inverted band.
  card: {
    p: { xs: 2.5, md: 3.5 },
    borderRadius: 0,
    bgcolor: 'transparent',
    color: 'inherit',
    borderColor: 'currentColor',
  },
  companyHeader: {
    pb: 2,
    mb: 1,
    borderBottom: '1px solid',
    borderColor: 'currentColor',
  },
  currentChip: {
    fontWeight: 600,
    borderRadius: 0,
  },
  meta: {
    opacity: 0.7,
  },
  /**
   * One role in the company timeline: ::before is the dot, ::after the
   * connector down to the next role (omitted on the last one).
   */
  role: (isFirst: boolean, hasNext: boolean) => ({
    position: 'relative',
    pl: { xs: 2.5, md: 3 },
    pt: isFirst ? 2 : 3,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: isFirst ? 26 : 38,
      width: 9,
      height: 9,
      borderRadius: '50%',
      bgcolor: 'primary.main',
    },
    // Spread rather than an undefined value: sx rejects undefined entries.
    ...(hasNext
      ? {
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 4,
            top: isFirst ? 38 : 50,
            bottom: -12,
            width: '1px',
            bgcolor: 'currentColor',
            opacity: 0.3,
          },
        }
      : {}),
  }),
  roleMeta: {
    mb: 1.5,
    opacity: 0.7,
  },
  highlightList: {
    m: 0,
    pl: 2.5,
  },
  highlight: {
    mb: 0.75,
    lineHeight: 1.7,
    opacity: 0.85,
  },
  skillRow: {
    mt: 1.5,
  },
  skillChip: {
    fontSize: '0.72rem',
    borderRadius: 0,
    color: 'inherit',
    borderColor: 'currentColor',
    opacity: 0.8,
  },
};

export { ExperienceSectionStyles };
export default ExperienceSectionStyles;
