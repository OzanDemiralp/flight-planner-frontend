import { TextField, Grid } from '@mui/material';

function NumberFields({
  setMinNonWorkingDays,
  setVacationLength,
  minNonWorkingDays,
  vacationLength,
}) {
  return (
    <Grid container spacing={1} mt={1.5} justifyContent='center'>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label='Minimum Non-Work Days'
          type='number'
          fullWidth
          value={minNonWorkingDays}
          onChange={(e) => setMinNonWorkingDays(Number(e.target.value))}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label='Vacation Length'
          type='number'
          fullWidth
          value={vacationLength}
          onChange={(e) => setVacationLength(Number(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}

export default NumberFields;
