import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

function InputField({ form, name, label }) {
  const { formState } = form;
  const { errors } = formState;
  const hasError = !!errors[name];

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={hasError}
          variant="outlined"
          helperText={errors[name]?.message}
          fullWidth
          margin="normal"
        />
      )}
    ></Controller>
  );
}

export default InputField;
