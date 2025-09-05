import { Box, Button } from '@mui/material';
import { PiAirplaneTiltBold } from 'react-icons/pi';
import { useState } from 'react';
import FlightCard from './FlightCard';

function SearchButton({ trips }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Buton */}
      <Box
        sx={{
          marginTop: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          onClick={() => setOpen(!open)}
          sx={{
            bgcolor: '#2196f3',
            color: 'white',
            '&:hover': { bgcolor: '#1976d2' },
            borderRadius: 2,
            px: 3,
            py: 1,
          }}
        >
          <PiAirplaneTiltBold size={24} />
        </Button>
      </Box>

      {/* Paper altına açılan panel */}
      <Box
        sx={{
          maxHeight: open ? '60vh' : 0,
          overflowY: 'auto',
          transition: 'max-height 0.3s ease',
          mt: 2,
        }}
      >
        {open && trips.map((trip, idx) => <FlightCard key={idx} trip={trip} />)}
      </Box>
    </>
  );
}

export default SearchButton;
