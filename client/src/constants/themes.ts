import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    // primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: {
      main: '#ff763a',
      light: '#ffc6ba',
      dark: '#ff5e3a',
    }, // This is just green.A700 as hex.
    common: {
      black: '#515365',
      white: '#fff',
    },
    text: {
      primary: '#888da8',
    },
  },

  typography: {
    body1: {
      fontSize: '0.812rem',
    },
  },
});
export default theme;
