import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(({ ...props }: ButtonProps) => (
  <Button {...props} />
))`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    width: 220px;
    height: 55px;
    border-radius: 55px;
  }

  & .MuiButton-label {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }

  & .MuiButton-startIcon,
  & .MuiButton-endIcon {
    margin: 5px;
  }
`;

export default StyledButton;
