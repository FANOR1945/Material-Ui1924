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
const AppBar = (props) => {
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
        <Link href='/'>
          {' '}
          <Box
            component='img'
            src={logoImage}
            className={classes.image_logo}
          />
        </Link>
        <Hidden smDown>
          <Content className={classes.menu_landing_pages}>
            <Link
              href='/about-us'
              underline='none'
            >
              <Typography className={classes.tittle}>Sobre Nosotros</Typography>
            </Link>
            <Link
              href='/seeds-ours'
              underline='none'
            >
              <Typography className={classes.tittle}>
                Nuestras Semillas
              </Typography>
            </Link>
            <Link
              href='/services-ours'
              underline='none'
            >
              <Typography className={classes.tittle}>Servicios</Typography>
            </Link>
            <Link
              href='/contact-us'
              underline='none'
            >
              <Typography className={classes.tittle}>Contacto</Typography>
            </Link>
          </Content>

          <Link href='/sign-in'>
            <Box
              component='img'
              src={logo1Image}
              className={classes.image_signin}
            />
          </Link>
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
