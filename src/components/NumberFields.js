import { TextField, Grid } from '@mui/material';

function NumberFields({ formState, updateFormState }) {
  return (
    <Grid container spacing={1} mt={1.5} justifyContent='center'>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label='Minimum Non-Work Days'
          type='number'
          fullWidth
          value={formState.minNonWorkingDays}
          onChange={(e) =>
            updateFormState('minNonWorkingDays', Number(e.target.value))
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label='Vacation Length'
          type='number'
          fullWidth
          value={formState.vacationLength}
          onChange={(e) =>
            updateFormState('vacationLength', Number(e.target.value))
          }
        />
      </Grid>
    </Grid>
  );
}

export default NumberFields;
