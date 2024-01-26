import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { sMoneyTrackerTheme } from './theme';

const GlobalStyles = createGlobalStyle`
  body{
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Kaushan Script';
    background-color: "#d1e8e2";
  }
`;

const App = () => {
  return (
    <div>
      <ThemeProvider theme={sMoneyTrackerTheme}>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
};

export default App;
