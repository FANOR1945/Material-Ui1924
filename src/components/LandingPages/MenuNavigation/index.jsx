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
        </MyButton>{' '}
      </Link>
      <MyButton
        color='#212F3C'
        font='#EBF5FB'
        hover='#2C3E50'
        className={classes.button_nav}
      >
        <Typography className={classes.typography}>SOBRE NOSOTROS</Typography>
      </MyButton>
      <MyButton
        color='#212F3C'
        font='#EBF5FB'
        hover='#2C3E50'
        className={classes.button_nav}
        onClick={() => onItemClicked('/seedsours')}
      >
        <Typography className={classes.typography}>
          NUESTRAS SEMILLAS
        </Typography>
      </MyButton>
      <MyButton
        href='/services-ours'
        color='#212F3C'
        font='#EBF5FB'
        hover='#2C3E50'
        className={classes.button_nav}
      >
        <Typography className={classes.typography}>SERVICIOS</Typography>
      </MyButton>
      <MyButton
        href='/contact-us'
        color='#212F3C'
        font='#EBF5FB'
        hover='#2C3E50'
        className={classes.button_nav}
      >
        <Typography className={classes.typography}>SERVICIOS</Typography>
      </MyButton>
    </List>
  );
};

export default MenuNavigation;
