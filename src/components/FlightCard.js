import { Card, Typography } from '@mui/material';

function FlightCard({ trip }) {
  return (
    <Card
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant='subtitle2' color='text.secondary'>
        Departure: {trip.departureDate} {trip.departureTime}
      </Typography>
      <Typography variant='subtitle2' color='text.secondary'>
        Return: {trip.returnDate} {trip.returnTime}
      </Typography>
      <Typography variant='h6' color='primary' sx={{ mt: 1 }}>
        Total Price: ${trip.totalPrice}
      </Typography>
    </Card>
  );
}

export default FlightCard;
