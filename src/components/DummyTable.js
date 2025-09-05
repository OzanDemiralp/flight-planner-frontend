import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

function DummyTable() {
  const rows = Array.from({ length: 10 }).map((_, i) => ({
    name: `Flight ${i + 1}`,
    departure: `2025-09-${10 + i} 10:00`,
    arrival: `2025-09-${10 + i} 14:00`,
    price: 400 + i * 15,
  }));

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <Typography variant='h6' gutterBottom>
        Flight Prices
      </Typography>
      <TableContainer>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Arrival</TableCell>
              <TableCell>Price ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.departure}</TableCell>
                <TableCell>{row.arrival}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DummyTable;
