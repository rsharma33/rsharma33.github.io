
const ProjectsSectionStyles = {
  card: {
    bgcolor: 'background.paper',
    color: 'text.primary',
    borderRadius: 0,
    p: 0,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    display: 'block',
  },
  media: {
    position: 'relative',
    width: '100%',
    '&:hover .hoverTitle': {
      opacity: 1,
      pointerEvents: 'auto',
    },
  },
  image: (height: number) => ({
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    bgcolor: 'grey.800',
    height,
    transition: 'filter 0.3s',
  }),
  // Title panel that fades in over the cover on hover.
  hoverTitle: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    bgcolor: 'rgba(30,30,30,0.82)',
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
    pointerEvents: 'none',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 700,
    fontSize: { xs: '1.2rem', sm: '1.5rem' },
    textAlign: 'center',
    px: 2,
  },
  cta: {
    display: 'flex',
    justifyContent: 'center',
    mt: 6,
  },
  ctaButton: {
    px: 4,
    py: 1.5,
    textTransform: 'none',
    borderRadius: 0,
  },
};

export { ProjectsSectionStyles };
export default ProjectsSectionStyles;
