import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';

import Switch from '@material-ui/core/Switch';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './header.styles';
import useModeTheme from '../../../hooks/useModeTheme';
const Header = (props) => {
  const [isDark, handleThemeChange] = useModeTheme();
  const logout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };
  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          className={classes.menuButton}
          onClick={() => props.handleDrawerToggle()}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <Typography
          variant='h6'
          className={classes.tittle}
        >
          Planta Betanzos
        </Typography>

        <Switch
          checked={isDark}
          onChange={handleThemeChange}
        />

        <Button
          variant='text'
          onClick={() => logout()}
        >
          Fanor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
