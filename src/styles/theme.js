// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const baseTheme = {
  colors: {
    background: 'white',
    text: '#000000',
    primary: '#333333',
    secondary: '#white',
    bitcoinOrange: '#87CEEB',

  }
};

const muiTheme = createTheme({
  palette: {
    primary: {
      main: baseTheme.colors.bitcoinOrange,
    },
    secondary: {
      main: baseTheme.colors.secondary,
    },
    text: {
      primary: baseTheme.colors.text,
      secondary: baseTheme.colors.secondary,
    },
    background: {
      paper: baseTheme.colors.background,
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});

const theme = { ...baseTheme, muiTheme };

export default theme;

