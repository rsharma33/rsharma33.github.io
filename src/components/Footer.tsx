import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto', bgcolor: 'background.paper' }}>
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
        </Box>
    );
}