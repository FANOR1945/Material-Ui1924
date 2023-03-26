import React from 'react';
import { Container } from '../../components/Global';
import { Content } from '../../components/Global';
import { useStyles } from './page_layout.styles';
import Slider from '../../components/LandingPages/Slider';
import AppBar from '../../components/LandingPages/AppBar';
import Footer from '../../components/LandingPages/Footer';
import DrawerNavigation from '../../components/LandingPages/DrawerNavigation';
import { Hidden } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';

const PageLayout = (props) => {
  const classes = useStyles();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <Container>
      <Slider />
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      <Hidden xlDown>
        <DrawerNavigation variant='permanent' mobileOpen={false} />
      </Hidden>
      <Hidden xlUp>
        <DrawerNavigation
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      </Hidden>
      <Content className={classes.page_layout}>
        {props.children} <Footer />
      </Content>
    </Container>
  );
};

export default PageLayout;
