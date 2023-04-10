import React from 'react';
import { MyButton } from '../../../components/Global';
import { MyTextField } from '../../../components/Global';
import { Grid } from '@material-ui/core';
import PageLayout from '../../../layouts/PageLayout';
import { useStyles } from './presentation.styles';
const Presentation = () => {
  const classes = useStyles();
  return (
    <PageLayout>
      <Grid container>
        <MyButton
          color='blue'
          font='#EBF5FB'
          hover='red'
          className={classes.button}
        >
          fanor
        </MyButton>
        <MyButton
          color='orange'
          font='#EAF2F8'
          className={classes.button}
        >
          Choque
        </MyButton>
        <MyButton
          color='green'
          font='white'
          className={classes.button}
        >
          Aguirre
        </MyButton>
        <MyTextField
          className={classes.input}
          color='blue'
          font='white'
          placeholder='Correo electrónico o numero de télefono'
          name='email'
          type='text'
        />
        <MyTextField
          className={classes.input}
          color='orange'
          font='white'
          placeholder='Contraseña'
          name='password'
          type='password'
        />
        <MyButton
          color='#F9EBEA'
          font='black'
          className={classes.button}
        >
          Patricia
        </MyButton>
        <MyButton
          color='#C0392B'
          font='white'
          className={classes.button}
        >
          2023
        </MyButton>
      </Grid>
    </PageLayout>
  );
};

export default Presentation;
