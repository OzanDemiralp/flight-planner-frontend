import { TextField, Grid, Box, Tooltip } from '@mui/material';
import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

function NumberFields({ formState, updateFormState }) {
  const [errors, setErrors] = useState({
    minNonWorkingDays: '',
    vacationLength: '',
  });
  const handleChange = (field, value) => {
    let newErrors = { ...errors };
    const vacLength =
      field === 'vacationLength'
        ? Number(value)
        : Number(formState.vacationLength);
    const minNonWorkLength =
      field === 'minNonWorkingDays'
        ? Number(value)
        : Number(formState.minNonWorkingDays);
    if (field === 'minNonWorkingDays' && value < 0 && value != '') {
      newErrors[field] = 'Minimum Non-Work Days cannot be less than 0!';
    } else if (field === 'vacationLength' && value < 1 && value != '') {
      newErrors[field] = 'Vacation Length cannot be less than 1!';
    } else if (minNonWorkLength > vacLength) {
      // Mantıksal hata
      newErrors['minNonWorkingDays'] =
        'Minimum Non-Work Days cannot be greater than Vacation Length!';
    } else {
      // Hata yoksa temizle
      newErrors[field] = '';
      if (field === 'vacationLength') newErrors['minNonWorkingDays'] = '';
    }
    setErrors(newErrors);
    if (!newErrors[field]) {
      updateFormState(field, value);
    }
  };
  const renderNumberField = (label, value, field) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        label={label}
        type='number'
        fullWidth
        value={value}
        onChange={(e) => handleChange(field, Number(e.target.value))}
        error={!!errors[field]}
      />
      {errors[field] && (
        <Tooltip title={errors[field]} placement='right' arrow>
          <MdErrorOutline style={{ color: 'red', marginLeft: 8 }} size={24} />
        </Tooltip>
      )}
    </Box>
  );

  return (
    <Grid container spacing={1} mt={1.5} justifyContent='center'>
      <Grid item xs={12} sm={6} md={4}>
        {renderNumberField(
          'Vacation Length',
          formState.vacationLength,
          'vacationLength'
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {renderNumberField(
          'Minimum Non-Work Days',
          formState.minNonWorkingDays,
          'minNonWorkingDays'
        )}
      </Grid>
    </Grid>
  );
}

export default NumberFields;
