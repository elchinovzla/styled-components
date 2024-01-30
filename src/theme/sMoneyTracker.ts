import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#747474',
      contrastText: '#ffe400',
    },
    secondary: {
      main: '#ff652f',
      contrastText: '#272727',
    },
    error: {
      main: '#ff652f',
    },
    success: {
      main: '#14a76c',
    },
    warning: {
      main: '#ffe400',
    },
    info: {
      main: '#272727',
    },
    background: {
      paper: '#bbbbbb',
      default: '#272727',
    },
    action: {
      disabled: '#d5d5d5',
      disabledBackground: '#3c3c3c',
    },
  },
});

export default theme;
