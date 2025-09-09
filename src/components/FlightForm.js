import { Grid, TextField, Autocomplete } from '@mui/material';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { LuPlaneLanding } from 'react-icons/lu';

function FlightForm({ formState, updateFormState }) {
  // Şimdilik dummy şehir listesi
  const cities = [
    { code: 'IST', label: 'Istanbul' },
    { code: 'SJJ', label: 'Sarajevo' },
    { code: 'BEL', label: 'Belgrade' },
    { code: 'ZAG', label: 'Zagreb' },
    { code: 'VIE', label: 'Vienna' },
    // ileride backend’den fetch edilecek
  ];

  return (
    <Grid
      container
      spacing={2}
      flexWrap='wrap'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        //border: '1px dashed blue',
      }}
    >
      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        <Autocomplete
          value={formState.departureFrom || null}
          options={cities}
          onChange={(e, newValue) => updateFormState('departureFrom', newValue)}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Departure From'
              sx={{ width: '100%' }}
            />
          )}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={2}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'center' },
          alignItems: 'center',
        }}
      >
        <LuPlaneTakeoff size={30} />
      </Grid>

      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        <Autocomplete
          value={formState.departureTo || null}
          options={cities}
          onChange={(e, newValue) => updateFormState('departureTo', newValue)}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label='Departure To' />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        <Autocomplete
          value={formState.returnFrom || null}
          options={cities}
          onChange={(e, newValue) => updateFormState('returnFrom', newValue)}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label='Return From' />
          )}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={2}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'center' },
          alignItems: 'center',
        }}
      >
        <LuPlaneLanding size={30} />
      </Grid>

      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        <Autocomplete
          value={formState.returnTo || null}
          options={cities}
          onChange={(e, newValue) => updateFormState('returnTo', newValue)}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label='Return To' />}
        />
      </Grid>
    </Grid>
  );
}

export default FlightForm;
