import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import experienceData from '@/data/resume/experience.json';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

const experience: Array<{
  company: string;
  location: string;
  city: string;
  designation: string;
  tenure: string;
  description: string;
}> = experienceData as any;

export default function ExperienceSection() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box id="experience" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Experience
        </Typography>

        <Timeline position='right' sx={{ mt: 2, mb: 4 }}>
          {experience.map((exp, idx) => (
              <TimelineItem key={idx} className={idx === 0 ? 'no-before' : undefined}>
              <TimelineOppositeContent sx={{ flex: 0.18, minWidth: 100, color: 'text.secondary', pt: 3 }}>
                <Typography variant="caption">{exp.tenure}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {exp.designation}
                </Typography>
                <Typography variant="subtitle1" color="text.primary" fontWeight={500}>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  {exp.location} {exp.city ? `| ${exp.city}` : ''}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <span dangerouslySetInnerHTML={{ __html: exp.description }} />
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}
