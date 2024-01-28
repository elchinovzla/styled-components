import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import styled from 'styled-components';
import { InputProps } from './CommonType';

const StyledPasswordInputWrapper = styled.div<InputProps>`
  && {
    font-weight: 800;
    width: 220px;
    height: 55px;
  }

  & input[type='number']::-webkit-outer-spin-button,
  & input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & .MuiIconButton-root {
    color: ${(props) => props.theme.palette.primary.main};
  }

  & .MuiInputBase-input {
    color: ${(props) => props.theme.palette.common.white};
  }

  & .MuiInput-underline {
    &:hover:not(.Mui-disabled)::before {
      border-bottom: 1px solid
        ${(props) =>
          props.required
            ? props.theme.palette.primary.contrastText
            : props.theme.palette.common.white};
    }
    &.Mui-focused::before {
      border-bottom: 1px solid ${(props) => props.theme.palette.primary.main};
    }
    &::before {
      border-bottom: 1px solid ${(props) => props.theme.palette.common.white};
    }
  }

  & .MuiInputLabel-root {
    color: ${(props) =>
      props.required
        ? props.theme.palette.primary.contrastText
        : props.theme.palette.common.white};
  }
`;

const StyledInput: React.FC<InputProps> = ({
  variant = 'standard',
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledPasswordInputWrapper theme={theme} {...props}>
      <TextField variant={variant} {...props} />
    </StyledPasswordInputWrapper>
  );
};

export default StyledInput;
