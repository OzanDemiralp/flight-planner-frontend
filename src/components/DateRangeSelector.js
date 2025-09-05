import { Box, Grid, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

export default function DateRangeSelector({ onChange }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleStartChange = (newValue) => {
    setStart(newValue);
    if (onChange) onChange([newValue, end]);
  };

  const handleEndChange = (newValue) => {
    setEnd(newValue);
    if (onChange) onChange([start, newValue]);
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
              value={start}
              onChange={handleStartChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label='End Date'
              value={end}
              onChange={handleEndChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </Box>
  );
}
