import React from 'react';
import {
  IconButton,
  Typography,
  Hidden,
  Box,
  Grid,
  Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logoImage from '../../../assets/fonts/images/logo.png';
import logo1Image from '../../../assets/fonts/images/logo_login.png';
import { Content } from '../../../components/Global';
import { useStyles } from './app_bar.styles';
import useClicked from '../../../hooks/useClicked';
const AppBar = (props) => {
  const [onClicked] = useClicked();
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      className={classes.content_appbar}
    >
      <Grid
        container
        className={classes.griditems}
      >
        <Box
          onClick={() => onClicked('/')}
          component='img'
          src={logoImage}
          className={classes.image_logo}
        />

        <Hidden smDown>
          <Content className={classes.menu_landing_pages}>
            <Box onClick={() => onClicked('/about-us')}>
              <Typography className={classes.tittle}>Sobre Nosotros</Typography>
            </Box>
            <Box onClick={() => onClicked('/seeds-ours')}>
              <Typography className={classes.tittle}>
                Nuestras Semillas
              </Typography>
            </Box>
            <Box onClick={() => onClicked('/services-ours')}>
              <Typography className={classes.tittle}>Servicios</Typography>
            </Box>
            <Box onClick={() => onClicked('/contact-us')}>
              <Typography className={classes.tittle}>Contacto</Typography>
            </Box>
          </Content>{' '}
          <Box
            onClick={() => onClicked('/sign-in')}
            component='img'
            src={logo1Image}
            className={classes.image_signin}
          />
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <IconButton
            className={classes.icon_bottom}
            onClick={() => props.handleDrawerToggle()}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default AppBar;
