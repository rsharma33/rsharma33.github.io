'use client';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import LaptopIcon from '@mui/icons-material/Laptop';
import { useAppContext } from '@/context/AppContext';

export default function ModeSwitch() {
    const { mode, setMode } = useAppContext();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleFabClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    return (
        <>
            <Fab
                color="error"
                aria-label="theme switch"
                onClick={handleFabClick}
                sx={{
                    position: 'fixed',
                    top: { xs: 80, sm: 120 },
                    right: { xs: 16, sm: 32 },
                    zIndex: 2000,
                    boxShadow: 4,
                }}
            >
                {mode === 'light' ? <WbSunnyIcon /> : mode === 'dark' ? <Brightness2Icon /> : <LaptopIcon />}
            </Fab>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement="left-start"
                disablePortal
                sx={{ zIndex: 2100 }}
            >
                <Paper sx={{ p: 1, display: 'flex', gap: 1, alignItems: 'center', boxShadow: 4 }}>
                    <IconButton
                        color={mode === 'system' ? 'error' : 'default'}
                        onClick={() => { setMode('system'); setAnchorEl(null); }}
                        aria-label="System theme"
                    >
                        <LaptopIcon />
                    </IconButton>
                    <IconButton
                        color={mode === 'light' ? 'error' : 'default'}
                        onClick={() => { setMode('light'); setAnchorEl(null); }}
                        aria-label="Light theme"
                    >
                        <WbSunnyIcon />
                    </IconButton>
                    <IconButton
                        color={mode === 'dark' ? 'error' : 'default'}
                        onClick={() => { setMode('dark'); setAnchorEl(null); }}
                        aria-label="Dark theme"
                    >
                        <Brightness2Icon />
                    </IconButton>
                </Paper>
            </Popper>
        </>
    );
}