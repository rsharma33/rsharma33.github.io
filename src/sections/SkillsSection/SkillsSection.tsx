'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import skillsData from '@/config/data/skills.json';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiDocker,
  SiGithubactions,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { SkillsSectionStyles as skillsCss } from './SkillsSection.styled'; // Adjust the import path as necessary
import { SectionWrapper } from '@/styles/styles';
import { Style } from '@mui/icons-material';
import { styled } from '@mui/material';

export default function SkillsSection() {
  const categories = skillsData as Array<{
    category: string;
    skills: Array<{
      level: any; name: string; percent: number; icon?: string | React.ReactNode 
}>;
  }>;

  const skillIcons: Record<string, React.ReactNode> = {
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    react: <SiReact />,
    redux: <SiRedux />,
    html5: <SiHtml5 />,
    css3: <SiCss3 />,
    sass: <SiSass />,
    nodedotjs: <SiNodedotjs />,
    express: <SiExpress />,
    graphql: <SiGraphql />,
    docker: <SiDocker />,
    githubactions: <SiGithubactions />,
    mongodb: <SiMongodb />,
    postgresql: <SiPostgresql />,
    mysql: <SiMysql />,
    jest: <SiJest />,
    testinglibrary: <SiTestinglibrary />,
    cypress: <SiCypress />,
    git: <SiGit />,
    figma: <SiFigma />,
    // Add more mappings as needed
  };

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const SkillsChip = styled('div')(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  }));

  return (
    <SectionWrapper id="skills-section" className={'section-wrapper'}>
      <Container maxWidth="lg" sx={skillsCss.container}>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={skillsCss.title}
          >
            Skills
          </Typography>
          <Divider sx={skillsCss.divider} />
          <Tabs
            value={tabIndex}
            allowScrollButtonsMobile
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 4 }}
          >
            {categories.map((cat, idx) => (
              <Tab key={cat.category} label={cat.category} />
            ))}
          </Tabs>
          <Box sx={{ mt: 2 }} className="skills-tab-content">
            {categories.map((cat, idx) => (
              tabIndex === idx && (
                <Box key={cat.category}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ width: '100%' }}>
                    {cat.skills.map((skill) => (
                      <SkillsChip>
                        <Chip
                          key={skill.name}
                          icon={typeof skill.icon === 'string' && skillIcons[skill.icon] ? skillIcons[skill.icon] as React.ReactElement : undefined}
                          label={`${skill.name} (${skill.percent}%)`} 
                          sx={{ fontWeight: 500, fontSize: '1.4rem', px: 2.4, py: 4, borderRadius: '32px' }}
                          variant="filled"
                        />
                        <Box component="h5" sx={{ width: '100%' }}></Box>
                      </SkillsChip>
                    ))}
                  </Stack>
                </Box>
              )
            ))}
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
