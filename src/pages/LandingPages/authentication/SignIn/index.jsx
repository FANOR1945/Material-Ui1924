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

import Swal from 'sweetalert2';
import Axios from 'axios';
import { Form } from '../../../../hooks/useForm';
import Controls from '../../../../components/Global/controls/Controls';
const SignIn = () => {
  const classes = useStyles();

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const usuario = {
      correo,
      contrasena,
    };
    const respuesta = await Axios.post('/ciudad/login', usuario);

    console.log(respuesta);

    const mensaje = respuesta.data.mensaje;
    if (mensaje !== 'Autenticado') {
      Swal.fire({
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const token = respuesta.data.token;
      const nombre = respuesta.data.nombre;
      const idUsuario = respuesta.data.id;

      sessionStorage.setItem('token', token);
      sessionStorage.setItem('nombre', nombre);
      sessionStorage.setItem('idUsuario', idUsuario);

      Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = '/major';
    }
  };

  return (
    <PageLayout>
      <Content>
        <Grid
          container
          className={classes.layout_login}
        >
          <Grid className={classes.paperstyle}>
            <Hidden only={['md', 'lg']}>
              <Box className={classes.logo}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Hidden>
            <Box
              component='img'
              src={logoa}
              className={classes.align_image_form}
            />{' '}
            <Form
              novalidate
              onSubmit={login}
              className={classes.form}
            >
              <MyTextField
                className={classes.input}
                color='#E9F7EF'
                font='#A6ACAF'
                placeholder='Email'
                name='email'
                onChange={(e) => setCorreo(e.target.value)}
              />
              <MyTextField
                className={classes.input}
                color='#E9F7EF'
                font='#A6ACAF'
                placeholder='Contraseña'
                name='password'
                type='password'
                onChange={(e) => setContrasena(e.target.value)}
              />

              <Controls.Button
                text='Iniciar Sesión'
                variant='outlined'
                type='submit'
                color='orange'
                hover='#D4AC0D'
                className={classes.button}
              />
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
