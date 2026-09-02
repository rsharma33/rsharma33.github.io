'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '@/lib/profile';
import { getClassByThemeMode } from '@/utils/utils';

export default function Footer() {
    return (
        <Box
            component="footer"
            className={getClassByThemeMode('darkBG', 'lightBG')}
            sx={{ py: 4, mt: 'auto' }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {profile.name}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.7 }}>
                            {profile.title} · {profile.location}
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={0.5}>
                        <Tooltip title="GitHub">
                            <IconButton
                                size="small"
                                component="a"
                                href={profile.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn">
                            <IconButton
                                size="small"
                                component="a"
                                href={profile.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </IconButton>
                        </Tooltip>
                    </Stack>

                    <Typography variant="caption" sx={{ opacity: 0.7 }}>
                        © {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
