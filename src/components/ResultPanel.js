import {
  Box,
  Paper,
  Button,
  Typography,
  Fade,
  Stack,
  Pagination,
} from '@mui/material';
import { useState } from 'react';

const PAGE_SIZE = 7;

function ResultPanel({ open, trips, onClose }) {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(trips.length / PAGE_SIZE);
  const handleChange = (_e, value) => {
    setPage(value);
  };
  const start = (page - 1) * PAGE_SIZE;
  const pagedTrips = trips.slice(start, start + PAGE_SIZE);

  return (
    <Fade in={open} timeout={500}>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'rgba(255,255,255,0.9)', // saydamlık 0.9 yazan yerde
          boxShadow: '0 8px 24px #2196f3',
          p: 2,
          borderRadius: 2,
          overflowY: 'auto',
        }}
      >
        <Typography variant='h6' gutterBottom fontWeight='bold'>
          Flights Found
        </Typography>

        <Stack spacing={0.5}>
          {pagedTrips.map((trip, i) => (
            <Paper
              key={i}
              elevation={1}
              sx={{
                p: 1.5,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 3,
                border: '1px solid rgba(0,0,0,0.08)',
                bgcolor: 'background.paper',
                '&:hover': {
                  boxShadow: 4,
                  transform: 'scale(1.02)',
                  transition: '0.2s',
                },
              }}
            >
              <Box>
                <Typography variant='body1' fontWeight='500'>
                  Departure: {trip.departureDate} &nbsp; {trip.departureTime}
                </Typography>
                <Typography variant='body1' fontWeight='500'>
                  Return: {trip.returnDate} &nbsp; {trip.returnTime}
                </Typography>
              </Box>
              <Typography variant='body1' fontWeight='600' color='primary'>
                {trip.totalPrice} $
              </Typography>
            </Paper>
          ))}
        </Stack>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          size='small'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        />
        <Button
          onClick={onClose}
          fullWidth
          sx={{
            bgcolor: '#2196f3',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': { bgcolor: '#1976d2' },
            transition: '0.2s',
          }}
        >
          Close
        </Button>
      </Box>
    </Fade>
  );
}

export default ResultPanel;
