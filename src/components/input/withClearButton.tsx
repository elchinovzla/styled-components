import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import { InputProps } from './CommonType';

const withClearButton = (WrappedComponent: React.FC<InputProps>) => {
  const WithClearButton: React.FC<InputProps> = (props) => {
    const { InputProps, onChange, ...rest } = props;
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);

      if (onChange) {
        onChange({
          ...event,
          target: {
            ...event.target,
            name: props.name,
            value: event.target.value,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const handleClear = () => {
      setInputValue('');

      if (onChange) {
        onChange({
          target: {
            name: props.name,
            value: '',
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const endAdornment = [
      [
        <InputAdornment position="end" key="clear">
          <IconButton aria-label="clear input" onClick={handleClear}>
            {inputValue && <ClearIcon fontSize="small" />}
          </IconButton>
        </InputAdornment>,
      ],
      ...(Array.isArray(InputProps?.endAdornment)
        ? InputProps?.endAdornment
        : [InputProps?.endAdornment]),
    ];

    return (
      <WrappedComponent
        value={inputValue}
        onChange={handleInputChange}
        InputProps={{ ...InputProps, endAdornment }}
        {...rest}
      />
    );
  };

  return WithClearButton;
};

export default withClearButton;
