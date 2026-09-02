'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { Project } from '@/types';

/**
 * Stands in for a screenshot by setting the project's own title as the cover
 * art — a poster-style treatment, so each tile names its project instead of
 * repeating a generic placeholder. Colours are inherited, so the tile works on
 * both the light cards and the dark masonry band. A real
 * `imageSmall`/`imageLarge` takes precedence wherever one is set.
 */
export default function ProjectCover({
  project,
  height,
}: {
  project: Project;
  height: number | string;
}) {
  const title = project.title ?? '';
  // Scale the type to the tile, and step down for longer titles so they still fit.
  const box = typeof height === 'number' ? height : 180;
  const base = Math.min(44, Math.max(20, Math.round(box / 5)));
  const fontSize = title.length > 22 ? Math.round(base * 0.72) : base;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height,
        display: 'flex',
        alignItems: 'flex-end',
        p: 2.5,
        overflow: 'hidden',
        // A faint wash of the inherited colour keeps the tile distinct from the
        // card body without hard-coding a light or dark background.
        bgcolor: 'action.hover',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 900,
          fontSize,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          opacity: 0.85,
        }}
      >
        {title}
        <Box component="span" sx={{ color: 'primary.main' }}>
          .
        </Box>
      </Box>
    </Box>
  );
}
