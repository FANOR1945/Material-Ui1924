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
const SignIn = () => {
  const classes = useStyles();
  const [onClicked] = useClicked();
  const [correomovil, setCorreomovil] = useState('');
  const [contrasena, setContrasena] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const usuario = { correomovil, contrasena };
    const respuesta = await Axios.post('/primeroasec/login', usuario);

    console.log(respuesta);

    const mensaje = respuesta.data.mensaje;
    if (mensaje !== 'Bienvenido') {
      Swal.fire({
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const token = respuesta.data.token;
      const primernombre = respuesta.data.primernombre;
      const segundonombre = respuesta.data.segundonombre;
      const tercernombre = respuesta.data.tercernombre;
      const apellidopaterno = respuesta.data.apellidopaterno;
      const apellidomaterno = respuesta.data.apellidomaterno;
      const idUsuario = respuesta.data.id;

      sessionStorage.setItem(' token', token);
      sessionStorage.setItem('primernombre', primernombre);
      sessionStorage.setItem('segundonombre', segundonombre);
      sessionStorage.setItem('tercernombre', tercernombre);
      sessionStorage.setItem('apellidopaterno', apellidopaterno);
      sessionStorage.setItem('apellidomaterno', apellidomaterno);
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
  const salir = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };
  const reg = () => {
    sessionStorage.clear();
    window.location.href = '/registerpbs';
  };
  const paperStyle = {
    padding: '30px 20px',
    width: 350,
    margin: ' 10px auto',
    marginTop: '40px',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  const marginTop = { marginTop: 10 };
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
            <Grid
              component='form'
              novalidate
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
                  autoFocus
                  onChange={(e) => setCorreomovil(e.target.value)}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Contraseña'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={(e) => setContrasena(e.target.value)}
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
            </Grid>
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
