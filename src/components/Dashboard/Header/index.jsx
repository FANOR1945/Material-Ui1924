import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from '@material-ui/core';
import { MyButton } from '../../Global';
import Switch from '@material-ui/core/Switch';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './header.styles';
import useModeTheme from '../../../hooks/useModeTheme';
import useClicked from '../../../hooks/useClicked';
const Header = (props) => {
  const [isDark, handleThemeChange] = useModeTheme();
  const [onClicked] = useClicked();
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
          Departamental Potosí
        </Typography>

        <Switch
          checked={isDark}
          onChange={handleThemeChange}
        />
        <Box onClick={() => onClicked('/')}>
          <MyButton
            color='#C0392B'
            font='white'
            className={classes.button}
          >
            Logout
          </MyButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
