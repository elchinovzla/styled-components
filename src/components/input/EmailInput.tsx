import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import { InputProps } from './CommonType';
import StyledInput from './StyledInput';
import withClearButton from './withClearButton';

const EmailInput: React.FC<InputProps> = (props) => {
  const { label, error, helperText, onChange, InputProps, ...rest } = props;

  return (
    <StyledInput
      error={error ?? false}
      helperText={error ? helperText : ''}
      type="email"
      label={label}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton aria-label="email">
              <AlternateEmailIcon />
            </IconButton>
          </InputAdornment>
        ),
        ...InputProps,
      }}
      {...rest}
    />
  );
};

export default withClearButton(EmailInput);
