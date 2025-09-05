import { Box, Paper, Button, Typography, Fade } from '@mui/material';

function ResultPanel({ open, trips, onClose }) {
  return (
    <Fade in={open} timeout={500}>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          boxShadow: 3,
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant='h6' gutterBottom>
          Flights
        </Typography>
        {trips.map((trip, i) => (
          <Paper key={i} sx={{ p: 1, my: 1 }}>
            {trip.departureDate} {trip.departureTime} → {trip.returnDate}{' '}
            {trip.returnTime} / {trip.totalPrice} $
          </Paper>
        ))}
        <Button
          onClick={onClose}
          sx={{ mt: 2, bgcolor: '#2196f3', color: 'white' }}
        >
          Close
        </Button>
      </Box>
    </Fade>
  );
}
export default ResultPanel;
