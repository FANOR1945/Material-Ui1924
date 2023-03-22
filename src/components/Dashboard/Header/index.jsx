import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './header.styles';
const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          className={classes.menuButton}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <Typography variant='h6' className={classes.tittle}>
          Planta Betanzos
        </Typography>
        <Button variant='contained' color='default'>
          Fanor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
