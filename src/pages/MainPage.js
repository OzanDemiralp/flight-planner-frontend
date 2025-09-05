import {
  AppBar,
  Box,
  FormControl,
  InputLabel,
  Paper,
  Select,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import FlightForm from '../components/FlightForm';
import NumberFields from '../components/NumberFields';
import DateRangeSelector from '../components/DateRangeSelector';
import SearchButton from '../components/SearchButton';

function MainPage() {
  const trips = Array.from({ length: 12 }).map((_, i) => ({
    departureDate: '2025-09-10',
    departureTime: '10:00',
    returnDate: '2025-09-20',
    returnTime: '18:00',
    totalPrice: 450 + i * 10,
  }));
  return (
    <>
      <Box>
        <AppBar sx={{ backgroundColor: '#2196f3' }}>
          <Toolbar>
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              }}
            >
              Flight Planner
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          mt: { xs: 2, sm: 3, md: 6, lg: 8 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: 'calc(100vh - 64px)',
          //backgroundColor: '#ffffffff',
          //border: '3px solid ',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            mt: { xs: 0.5, sm: 1.5, md: 3, lg: 4 },
            padding: { xs: 2, sm: 3, md: 4 },
            borderRadius: 4,
            width: { xs: '90%', sm: '60%', md: '50%', lg: '40%' },
            minWidth: 250,
            height: 'auto',
            maxHeight: { xs: '70vh', sm: '60vh', md: '50vh' },
            minHeight: 200,
            backgroundColor: 'white',
            boxShadow: '0 8px 24px #2196f3',
            opacity: 0.9, // 0.0 - 1.0 arası
          }}
        >
          <FlightForm />
          <DateRangeSelector />
          <NumberFields />
          <SearchButton trips={trips} />
        </Paper>
      </Box>
    </>
  );
}

export default MainPage;
