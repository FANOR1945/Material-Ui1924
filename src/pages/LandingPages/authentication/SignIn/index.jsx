import React from 'react';
import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Content } from '../../../../components/Global';
import { useStyles } from './signin.styles';
import logoa from '../../../../assets/fonts/images/logo_a.png';
import PageLayout from '../../../../layouts/PageLayout';
import { MyTextField } from '../../../../components/Global';
import { MyButton } from '../../../../components/Global';
import useClicked from '../../../../hooks/useClicked';
const SignIn = () => {
  const classes = useStyles();
  const [onClicked] = useClicked();

  return (
    <PageLayout>
      <Content>
        <Grid
          container
          className={classes.layout_login}
        >
          <Grid className={classes.paperstyle}>
            <Hidden only={['md', 'lg']}>
              <Grid container>
                <Box className={classes.logo}>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Hidden>
            <Box
              component='img'
              src={logoa}
              className={classes.align_image_form}
            />
            <Content className={classes.form}>
              <MyTextField
                className={classes.input}
                color='#E9F7EF'
                font='#A6ACAF'
                placeholder='Correo electrónico o numero de télefono'
                name='email'
                type='text'
              />

              <MyTextField
                className={classes.input}
                color='#E9F7EF'
                font='#A6ACAF'
                placeholder='Contraseña'
                name='password'
                type='password'
              />
              <Box onClick={() => onClicked('/major')}>
                <MyButton
                  color='orange'
                  hover='#D4AC0D'
                  className={classes.button}
                >
                  <Typography className={classes.typography}>
                    Iniciar Sesión
                  </Typography>
                </MyButton>{' '}
              </Box>
              <Box onClick={() => onClicked('/re-password')}>
                <Typography className={classes.link}>
                  ¿Olvidaste tu Contraseña?
                </Typography>
              </Box>
              {/*}
              <Link
                href='#'
                underline='none'
              >
                <Typography className={classes.typography}>
                  Crear Cuenta Nueva
                </Typography>
  </Link>*/}
            </Content>
          </Grid>
        </Grid>
      </Content>
    </PageLayout>
  );
};

export default SignIn;
