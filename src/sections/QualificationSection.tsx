import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import qualifications from '@/config/data/qualification.json'; // Adjust the import path as necessary

export default function QualificationSection() {

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box id="qualification" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Qualification
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell>Degree/Diploma</TableCell>
                <TableCell>Univ/Inst</TableCell>
                <TableCell>Place</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {qualifications.map((row: any, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.degree}</TableCell>
                  <TableCell>{row.institute}</TableCell>
                  <TableCell>{row.place}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
