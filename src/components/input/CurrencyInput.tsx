import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { InputProps } from './CommonType';
import StyledInput from './StyledInput';
import withClearButton from './withClearButton';

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
  onChange,
  ...rest
}) => {
  const { InputProps, ...restProps } = rest;

  return (
    <StyledInput
      error={error ?? false}
      helperText={error ? helperText : ''}
      type="text"
      inputMode="numeric"
      label={label}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton aria-label="currency">
              <AttachMoneyIcon />
            </IconButton>
          </InputAdornment>
        ),
        inputComponent: NumericFormatCustom as any,
        ...InputProps,
      }}
      {...restProps}
    />
  );
};

export default withClearButton(CurrencyInput);
