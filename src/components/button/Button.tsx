import { Button as MuiButton } from '@mui/material';
import React from 'react';

type ButtonStyle = {
  [property: string]: string;
};
export interface ButtonProps {
  label: string;
  style: ButtonStyle;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, style, onClick }) => {
  return (
    <MuiButton
      style={{ color: 'red', width: '200px', height: '300px', ...style }}
      onClick={onClick}
      variant="contained"
      color="primary"
      size="small"
    >
      {label}
    </MuiButton>
  );
};
export default Button;
