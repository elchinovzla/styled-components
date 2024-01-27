import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import styled from 'styled-components';
import { InputProps } from './CommonType';

interface StyledPasswordInputWrapperProps {
  isRequired?: boolean;
}

const StyledPasswordInputWrapper = styled.div<StyledPasswordInputWrapperProps>`
  && {
    font-weight: 800;
    width: 220px;
    height: 55px;
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
          props.isRequired
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
      props.isRequired
        ? props.theme.palette.primary.contrastText
        : props.theme.palette.common.white};
  }
`;

const StyledPasswordInput: React.FC<
  InputProps & StyledPasswordInputWrapperProps
> = ({ variant = 'standard', isRequired = false, ...props }) => {
  const theme = useTheme();
  return (
    <StyledPasswordInputWrapper isRequired={isRequired} theme={theme}>
      <TextField variant={variant} {...props} />
    </StyledPasswordInputWrapper>
  );
};

export default StyledPasswordInput;
