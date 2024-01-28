import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { InputProps } from './CommonType';
import StyledInput from './StyledInput';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        decimalScale={2}
      />
    );
  }
);

const CurrencyInput: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledInput
      error={error ?? false}
      helperText={error ? helperText : ''}
      type="text"
      inputMode="numeric"
      label={label}
      value={inputValue}
      onChange={handleInputChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton aria-label="currency">
              <AttachMoneyIcon />
            </IconButton>
          </InputAdornment>
        ),
        inputComponent: NumericFormatCustom as any,
      }}
      {...rest}
    />
  );
};

export default CurrencyInput;
