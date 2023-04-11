import React, { useState } from 'react';
import {
  Box,
  Grid,
  Hidden,
  Typography,
  TextField,
  Link,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Content } from '../../../../components/Global';
import { BootstrapButton, useStyles } from './signin.styles';
import logoa from '../../../../assets/fonts/images/logo_a.png';
import PageLayout from '../../../../layouts/PageLayout';
import { MyTextField } from '../../../../components/Global';
import { MyButton } from '../../../../components/Global';
import useClicked from '../../../../hooks/useClicked';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { Form } from '../../../../hooks/useForm';
import useForm from '../../../../hooks/useFormi';
import { Registerpost } from '../../../../asyncData/api';
const SignIn = () => {
  const classes = useStyles();

  const [handlerChangeForm, handlerResetForm] = useForm({
    email: 'fanor@gmail.com',
    password: '',
  });
  const { correomovil, password } = Form;

  const login = (e) => {
    e.preventDefault();
    Registerpost();

    setTimeout(() => {
      window.location.href = '/major';
    }, 1600);
  };

  const btnstyle = { margin: '8px 0' };

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
            <Form
              novalidate
              className={classes.content_form}
              onSubmit={login}
            >
              <Box>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Correo o Móvil'
                  name='email'
                  autoComplete='email'
                  value={correomovil}
                  onChange={handlerChangeForm}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Contraseña'
                  type='password'
                  id='password'
                  value={password}
                  onChange={handlerChangeForm}
                />

                <BootstrapButton
                  type='submit'
                  color='primary'
                  style={btnstyle}
                  fullWidth
                >
                  ENTRAR
                </BootstrapButton>
              </Box>
            </Form>
            <Grid align='center'>
              <Typography>
                <Link href='#'>¿Has olvidado la contraseña?</Link>
              </Typography>
            </Grid>{' '}
          </Grid>
        </Grid>{' '}
      </Content>
    </PageLayout>
  );
};

export default SignIn;
