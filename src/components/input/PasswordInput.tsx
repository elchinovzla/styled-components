import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import { InputProps } from './CommonType';
import StyledInput from './StyledInput';
import withClearButton from './withClearButton';

const PasswordInput: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { InputProps, ...restProps } = rest;

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const endAdornment = [
    ...(Array.isArray(InputProps?.endAdornment)
      ? InputProps?.endAdornment
      : [InputProps?.endAdornment]),
    <InputAdornment position="end" key="visibility">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>,
  ];

  return (
    <StyledInput
      error={error ?? false}
      helperText={error ? helperText : ''}
      type={showPassword ? 'text' : 'password'}
      label={label}
      InputProps={{
        ...InputProps,
        endAdornment,
      }}
      {...restProps}
    />
  );
};

export default withClearButton(PasswordInput);
