import { AppBar, Box, Paper, Toolbar, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import FlightForm from '../components/FlightForm';
import NumberFields from '../components/NumberFields';
import DateRangeSelector from '../components/DateRangeSelector';
import SearchButton from '../components/SearchButton';
import ResultPanel from '../components/ResultPanel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlightData } from '../features/FlightSlice';
function MainPage() {
  const dispatch = useDispatch();
  const { result, status, error } = useSelector((state) => state.flight);
  const [open, setOpen] = useState(false);
  const trips = result?.flightData?.trips || [];
  const [formState, setFormState] = useState({
    departureFrom: null,
    departureTo: null,
    returnFrom: null,
    returnTo: null,
    startDate: null,
    endDate: null,
    vacationLength: 1,
    minNonWorkingDays: 0,
  });
  const isFormValid =
    formState.departureFrom?.code &&
    formState.departureTo?.code &&
    formState.returnFrom?.code &&
    formState.returnTo?.code &&
    formState.startDate &&
    formState.endDate &&
    formState.vacationLength &&
    formState.minNonWorkingDays;
  const updateFormState = (key, value) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };
  const formData = {
    departureFrom: formState.departureFrom?.code || null,
    departureTo: formState.departureTo?.code || null,
    returnFrom: formState.returnFrom?.code || null,
    returnTo: formState.returnTo?.code || null,
    startDate: formState.startDate?.format('YYYY-MM-DD') || null,
    endDate: formState.endDate?.format('YYYY-MM-DD') || null,
    vacationLength: formState.vacationLength,
    minNonWorkingDays: formState.minNonWorkingDays,
  };

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
            <FlightForm
              formState={formState}
              updateFormState={updateFormState}
            />
            <DateRangeSelector
              formState={formState}
              updateFormState={updateFormState}
            />
            <NumberFields
              formState={formState}
              updateFormState={updateFormState}
            />
            <SearchButton
              disabled={!isFormValid}
              onClick={() => {
                setOpen(true);
                dispatch(fetchFlightData(formData));
              }}
            />
          </Paper>
        </Grid>

        {/* Sağ Box */}
        <Grid item xs={12} md={6} sx={{ boxSizing: 'border-box' }}>
          <ResultPanel
            open={open || status === 'isLoading'}
            trips={trips}
            isLoading={status === 'loading'}
            error={error}
            onClose={() => setOpen(false)}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default MainPage;
