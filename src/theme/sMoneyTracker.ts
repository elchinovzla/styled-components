import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#272727',
      light: '#3c3c3c',
      dark: '#000000',
      contrastText: '#ffe400',
    },
    secondary: {
      main: '#515151',
      contrastText: '#ff652f',
    },
    background: {
      paper: '#747474',
      default: '#747474',
    },
    action: {
      disabled: '#d5d5d5',
      disabledBackground: '#3c3c3c',
    },
  },
});

export default theme;
