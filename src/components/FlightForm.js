import { Grid, TextField, Autocomplete } from '@mui/material';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { LuPlaneLanding } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesData } from '../features/CitiesSlice';
import { useEffect } from 'react';

function FlightForm({ formState, updateFormState }) {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.list) || [];

  useEffect(() => {
    dispatch(fetchCitiesData({})); // formData gerekirse buraya ver
  }, [dispatch]);
  console.log('cities:', cities);

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
      }}
    >
      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        <Autocomplete
          value={
            formState.departureFrom
              ? cities.find((c) => c.id === formState.departureFrom.id)
              : null
          }
          options={cities}
          onChange={(e, newValue) => updateFormState('departureFrom', newValue)}
          getOptionLabel={(option) => option.name}
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
          value={
            formState.departureTo
              ? cities.find((c) => c.id === formState.departureTo.id)
              : null
          }
          options={cities}
          onChange={(e, newValue) => updateFormState('departureTo', newValue)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label='Departure To' />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        <Autocomplete
          value={
            formState.returnFrom
              ? cities.find((c) => c.id === formState.returnFrom.id)
              : null
          }
          options={cities}
          onChange={(e, newValue) => updateFormState('returnFrom', newValue)}
          getOptionLabel={(option) => option.name}
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
          value={
            formState.returnTo
              ? cities.find((c) => c.id === formState.returnTo.id)
              : null
          }
          options={cities}
          onChange={(e, newValue) => updateFormState('returnTo', newValue)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} label='Return To' />}
        />
      </Grid>
    </Grid>
  );
}

export default FlightForm;
