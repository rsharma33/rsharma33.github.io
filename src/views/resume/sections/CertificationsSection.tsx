import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import certifications from '@/data/resume/certifications.json';

type Certification = {
  duration: string;
  title: string;
  institute: string;
};

export default function CertificationsSection() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box id="certifications" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Certifications
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {certifications.map((row: Certification, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>{row.duration} <strong>{row.title}</strong> from {row.institute}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
