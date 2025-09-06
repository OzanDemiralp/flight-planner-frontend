import {
  AppBar,
  Box,
  Paper,
  Toolbar,
  Typography,
  Grid,
  Fade,
} from '@mui/material';
import { useState } from 'react';
import FlightForm from '../components/FlightForm';
import NumberFields from '../components/NumberFields';
import DateRangeSelector from '../components/DateRangeSelector';
import SearchButton from '../components/SearchButton';
import ResultPanel from '../components/ResultPanel';

function MainPage() {
  const [open, setOpen] = useState(false);
  const trips = Array.from({ length: 240 }).map((_, i) => ({
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

      {/* Grid ile sol ve sağ alan */}
      <Grid
        container
        spacing={2}
        sx={{
          minHeight: 'calc(100vh - 64px)',
          px: 2,
          mt: { xs: 2, sm: 3, md: 6, lg: 8 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Sol Paper */}
        <Grid
          item
          xs={12} // mobilde tam genişlik
          md={6} // desktopta yarı yarıya
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ boxSizing: 'border-box' }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
              borderRadius: 4,
              width: '100%', // Grid item'ı tamamen kaplasın
              height: 'auto',
              maxHeight: { xs: '70vh', sm: '60vh', md: '50vh' },
              minHeight: 200,
              backgroundColor: 'white',
              boxShadow: '0 8px 24px #2196f3',
              opacity: 0.9,
            }}
          >
            <FlightForm />
            <DateRangeSelector />
            <NumberFields />
            <SearchButton
              onClick={() => {
                setOpen(true);
                console.log('Button clicked:', open);
              }}
            />
          </Paper>
        </Grid>

        {/* Sağ Box */}
        <Grid
          item
          xs={12}
          md={6} // desktopta yarı yarıya
          sx={{ boxSizing: 'border-box' }}
        >
          <ResultPanel
            open={open}
            trips={trips}
            onClose={() => setOpen(false)}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default MainPage;
