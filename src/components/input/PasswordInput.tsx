import ClearIcon from '@mui/icons-material/Clear';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import { InputProps } from './CommonType';
import StyledInput from './StyledInput';

const PasswordInput: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <StyledInput
      error={error ?? false}
      helperText={error ? helperText : ''}
      type={showPassword ? 'text' : 'password'}
      label={label}
      value={value}
      onChange={handleOnChange}
      InputProps={{
        endAdornment: [
          <InputAdornment position="end">
            <IconButton aria-label="clear input" onClick={handleClear}>
              {value && <ClearIcon fontSize="small" />}
            </IconButton>
          </InputAdornment>,
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>,
        ],
      }}
      {...rest}
    />
  );
};

export default PasswordInput;
