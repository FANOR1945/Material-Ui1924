import React from 'react';
import useReactRouter from 'use-react-router';
import { List, Typography, Link } from '@material-ui/core';

import MyButton from '../../Global/MyButton';
import { useStyles } from './menu_navigation';

const MenuNavigation = () => {
  const { history, location } = useReactRouter();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const onItemClicked = (path) => {
    setExpanded(false);
    return history.push(path);
  };

  return (
    <List className={classes.root}>
      <Link
        href='/'
        underline='none'
      >
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>PRINCIPAL</Typography>
        </MyButton>
      </Link>
      <Link
        href='/sign-in'
        underline='none'
      >
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>INGRESAR</Typography>
        </MyButton>
      </Link>
      <Link
        href='/about-us'
        underline='none'
      >
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>SOBRE NOSOTROS</Typography>
        </MyButton>
      </Link>
      <Link
        href='/seeds-ours'
        underline='none'
      >
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
      </Link>
      <Link
        href='/services-ours'
        underline='none'
      >
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>SERVICIOS</Typography>
        </MyButton>
      </Link>
      <Link
        href='/contact-us'
        underline='none'
      >
        <MyButton
          color='#212F3C'
          font='#EBF5FB'
          hover='#2C3E50'
          className={classes.button_nav}
        >
          <Typography className={classes.typography}>CONTACTO</Typography>
        </MyButton>
      </Link>
    </List>
  );
};

export default MenuNavigation;
