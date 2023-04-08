import React from 'react';
import { List, Typography, Box } from '@material-ui/core';
import { MyButton } from '../../Global';
import { useStyles } from './menu_navigation';
import useClicked from '../../../hooks/useClicked';
const MenuNavigation = () => {
  const [onClicked] = useClicked();
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Box onClick={() => onClicked('/')}>
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>PRINCIPAL</Typography>
        </MyButton>
      </Box>
      <Box onClick={() => onClicked('/sign-in')}>
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>INGRESAR</Typography>
        </MyButton>
      </Box>
      <Box onClick={() => onClicked('/about-us')}>
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>SOBRE NOSOTROS</Typography>
        </MyButton>
      </Box>
      <Box onClick={() => onClicked('/seeds-ours')}>
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>
            NUESTRAS SEMILLAS
          </Typography>
        </MyButton>
      </Box>
      <Box onClick={() => onClicked('/services-ours')}>
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>SERVICIOS</Typography>
        </MyButton>
      </Box>
      <Box onClick={() => onClicked('/contact-us')}>
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>CONTACTO</Typography>
        </MyButton>
      </Box>
    </List>
  );
};

export default MenuNavigation;
