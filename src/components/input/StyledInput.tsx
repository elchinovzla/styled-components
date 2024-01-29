import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import styled from 'styled-components';
import { InputProps } from './CommonType';

const StyledPasswordInputWrapper = styled.div<InputProps>`
  && {
    font-weight: 800;
    width: 300px;
    height: 55px;
  }

  & .MuiIconButton-root {
    color: ${(props) => props.theme.palette.primary.main};
  }

  & .MuiInputBase-input {
    color: ${(props) => props.theme.palette.common.white};
    padding-left: ${(props) =>
      props.InputProps?.startAdornment ? '0' : '20px'};
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
  InputProps,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledPasswordInputWrapper
      theme={theme}
      InputProps={InputProps}
      {...props}
    >
      <TextField variant={variant} {...props} InputProps={InputProps} />
    </StyledPasswordInputWrapper>
  );
};

export default StyledInput;
