import { ButtonProps as MuiButtonProps } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import StyledButton from './StyledButton';

type ButtonStyle = {
  [property: string]: string;
};

export type ButtonType = 'primary' | 'secondary';
export interface ButtonProps extends Omit<MuiButtonProps, 'type'> {
  label: string;
  style?: ButtonStyle;
  type: ButtonType;
  isLoading?: boolean;
}

const buttonPropsMap: Record<ButtonType, MuiButtonProps> = {
  primary: {
    variant: 'contained',
    size: 'large',
    color: 'primary',
  },
  secondary: {
    variant: 'contained',
    size: 'large',
    color: 'secondary',
  },
};

const Button: React.FC<ButtonProps> = ({
  label,
  style,
  type,
  isLoading,
  disabled,
  ...rest
}) => {
  const buttonProps = buttonPropsMap[type];
  return (
    <StyledButton
      style={style}
      disabled={isLoading || disabled}
      {...buttonProps}
      {...rest}
    >
      {isLoading ? <CircularProgress color="inherit" /> : label}
    </StyledButton>
  );
};

export default Button;
