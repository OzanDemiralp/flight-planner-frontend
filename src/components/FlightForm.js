import { Grid, TextField, Autocomplete, Tooltip, Box } from '@mui/material';
import { LuPlaneTakeoff, LuPlaneLanding } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesData } from '../features/CitiesSlice';
import { useEffect, useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

function FlightForm({ formState, updateFormState }) {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.list) || [];
  useEffect(() => {
    dispatch(fetchCitiesData());
  }, [dispatch]);

  const [errors, setErrors] = useState({
    departureFrom: '',
    departureTo: '',
    returnFrom: '',
    returnTo: '',
  });

  const handleChange = (field, newValue) => {
    let newErrors = { ...errors };

    switch (field) {
      case 'departureFrom':
        newErrors.departureFrom =
          newValue?.id === formState.departureTo?.id
            ? 'Departure From and Departure To cannot be the same!'
            : '';
        break;
      case 'departureTo':
        newErrors.departureTo =
          newValue?.id === formState.departureFrom?.id
            ? 'Departure To and Departure From cannot be the same!'
            : '';
        break;
      case 'returnFrom':
        newErrors.returnFrom =
          newValue?.id === formState.returnTo?.id
            ? 'Return From and Return To cannot be the same!'
            : '';
        break;
      case 'returnTo':
        newErrors.returnTo =
          newValue?.id === formState.returnFrom?.id
            ? 'Return To and Return From cannot be the same!'
            : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);

    if (!newErrors[field]) {
      updateFormState(field, newValue);
    }
  };

  const renderAutocomplete = (label, value, field) => (
    <Autocomplete
      value={value ? cities.find((c) => c.id === value.id) : null}
      options={cities}
      onChange={(e, newValue) => handleChange(field, newValue)}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            {...params}
            label={label}
            error={!!errors[field]}
            sx={{ width: '100%' }}
          />
          {errors[field] && (
            <Tooltip title={errors[field]} placement='right' arrow>
              <MdErrorOutline
                style={{ color: 'red', marginLeft: 8 }}
                size={24}
              />
            </Tooltip>
          )}
        </Box>
      )}
    />
  );

  return (
    <Grid
      container
      spacing={2}
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        {renderAutocomplete(
          'Departure From',
          formState.departureFrom,
          'departureFrom'
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={2}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <LuPlaneTakeoff size={30} />
      </Grid>

      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        {renderAutocomplete(
          'Departure To',
          formState.departureTo,
          'departureTo'
        )}
      </Grid>

      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        {renderAutocomplete('Return From', formState.returnFrom, 'returnFrom')}
      </Grid>

      <Grid
        item
        xs={12}
        sm={2}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <LuPlaneLanding size={30} />
      </Grid>

      <Grid item xs={12} sm={6} lg={3} sx={{ flex: '1 1 200px' }}>
        {renderAutocomplete('Return To', formState.returnTo, 'returnTo')}
      </Grid>
    </Grid>
  );
}

export default FlightForm;
