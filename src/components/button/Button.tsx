import { ButtonProps as MuiButtonProps } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Style } from '../common/Type';
import StyledButton from './StyledButton';

export type ButtonType = 'primary' | 'secondary';

export interface ButtonProps extends MuiButtonProps {
  label: string;
  style?: Style;
  styleType?: ButtonType;
  isLoading?: boolean;
}

const buttonPropsMap: Record<ButtonType, MuiButtonProps> = {
  primary: {
    variant: 'contained',
    size: 'large',
    color: 'primary',
  },
  secondary: {
    variant: 'outlined',
    size: 'large',
    color: 'secondary',
  },
};

const Button: React.FC<ButtonProps> = ({
  label,
  style,
  styleType = 'primary',
  isLoading,
  disabled,
  // onClick,
  ...rest
}) => {
  const buttonProps = buttonPropsMap[styleType];
  return (
    <StyledButton
      // onClick={onClick}
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
