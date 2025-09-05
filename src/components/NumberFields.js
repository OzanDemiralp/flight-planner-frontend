import { TextField, Grid } from '@mui/material';
import SearchButton from './SearchButton';

function NumberFields() {
  return (
    <Grid container spacing={1} mt={1.5} justifyContent='center'>
      <Grid item xs={12} sm={6} md={4}>
        <TextField label='Minimum Non-Work Days' type='number' fullWidth />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField label='Vacation Length' type='number' fullWidth />
      </Grid>
    </Grid>
  );
}

export default NumberFields;
