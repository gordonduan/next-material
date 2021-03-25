// import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from '../components/GlobalStyles';
import theme from '../components/theme';

const App = ({ Component, pageProps }) => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
       <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
