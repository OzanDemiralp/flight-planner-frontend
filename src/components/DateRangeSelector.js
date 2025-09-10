import { Box, Grid, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

export default function DateRangeSelector({ formState, updateFormState }) {
  const handleStartChange = (newValue) => {
    updateFormState('startDate', newValue);
  };

  const handleEndChange = (newValue) => {
    updateFormState('endDate', newValue);
  };

  return (
    <Box
      mt={1.5}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <DatePicker
              label='Start Date'
              onChange={handleStartChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label='End Date'
              onChange={handleEndChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
              minDate={formState.startDate} // dönüş tarihi gidişten küçük olamaz
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </Box>
  );
}
