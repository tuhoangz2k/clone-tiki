import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, FormHelperText, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { style } from '@mui/system';
QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

// const QuantityField =style(OutlinedInput)({})
function QuantityField({ form, name, label }) {
  const { formState, setValue, getValues } = form;

  const { errors } = formState;
  const hasError = !!errors[name];

  const handleDes = () => {
    const value = getValues(name);
    setValue(name, Number.parseInt(value) - 1);
  };
  const handleAdd = () => {
    const value = getValues(name);
    setValue(name, Number.parseInt(value) + 1);
  };

  return (
    <FormControl error={hasError} margin="normal" variant="outlined" size="small">
      <Controller
        control={form.control}
        name={name}
        render={({ field }) => (
          <Box sx={{ display: 'flex' }}>
            <IconButton onClick={() => handleDes(name)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <OutlinedInput sx={{ width: '150px' }} {...field} fullWidth id={name} type="number" />
            <IconButton onClick={() => handleAdd(name)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        )}
      ></Controller>
      <FormHelperText id={name}>{hasError && errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
