import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../components/theme';
import GlobalStyles from '../components/GlobalStyles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavDrawer from '../components/NavDrawer'
import AppBar from '../components/AppBar'
import Content from '../components/Content'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

const App = ({ Component, pageProps }) => {
  console.log(pageProps);
  console.log(pageProps.children);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className={classes.root}>
        <CssBaseline />
        <AppBar handleDrawerOpen={handleDrawerOpen} open={open}/>
        <NavDrawer handleDrawerClose={handleDrawerClose} open={open}/>
        <Content >
          <Component {...pageProps} />
        </Content>
      </div>
    </ThemeProvider>
  )
}

export default App
