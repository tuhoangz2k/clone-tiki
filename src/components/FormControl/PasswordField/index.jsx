import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, FormHelperText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { style } from '@mui/system';
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

// const PasswordField =style(OutlinedInput)({})
function PasswordField({ form, name, label }) {
  const { formState } = form;

  const { errors } = formState;
  const hasError = !!errors[name];
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>

      <Controller
        control={form.control}
        name={name}
        render={({ field }) => (
          <OutlinedInput
            {...field}
            fullWidth
            id={name}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
          />
        )}
      ></Controller>
      <FormHelperText id={name}>{hasError && errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
