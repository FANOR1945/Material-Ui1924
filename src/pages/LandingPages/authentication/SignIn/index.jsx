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
import Controls from '../../../../components/Global/controls/Controls';
const SignIn = () => {
  const classes = useStyles();

  const [correomovil, setCorreomovil] = useState('');
  const [contrasena, setContrasena] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const usuario = { correomovil, contrasena };
    const respuesta = await Axios.post('/primeroasec/login', usuario);

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
      const primernombre = respuesta.data.primernombre;

      const idUsuario = respuesta.data.id;

      sessionStorage.setItem(' token', token);
      sessionStorage.setItem('primernombre', primernombre);
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
            />{' '}
            <Form
              novalidate
              onSubmit={login}
            >
              {' '}
              <Content className={classes.form}>
                <Box>
                  <MyTextField
                    className={classes.input}
                    color='#E9F7EF'
                    font='#A6ACAF'
                    placeholder='Email'
                    name='email'
                    onChange={(e) => setCorreomovil(e.target.value)}
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
                </Box>{' '}
              </Content>
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
