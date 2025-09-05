import { Box, Button } from '@mui/material';
import { PiAirplaneTiltBold } from 'react-icons/pi';
import { useState } from 'react';
import FlightCard from './FlightCard';

function SearchButton({ onClick }) {
  return (
    <Box
      sx={{
        marginTop: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        onClick={onClick} // burada dışarıdan gelen fonksiyonu kullan
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
  );
}

export default SearchButton;
