import { ButtonProps as MuiButtonProps } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Style } from '../common/Type';
import StyledButton from './StyledButton';

export type ButtonType = 'primary' | 'secondary';

interface ButtonProps extends Omit<MuiButtonProps, 'type'> {
  label: string;
  style?: Style;
  type: ButtonType;
  isLoading?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
  type,
  isLoading,
  disabled,
  onClick,
  ...rest
}) => {
  const buttonProps = buttonPropsMap[type];
  return (
    <StyledButton
      onClick={onClick}
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
