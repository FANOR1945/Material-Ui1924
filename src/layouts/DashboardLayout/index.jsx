import React from 'react';
import { Hidden, Box } from '@material-ui/core';
import SidebarNavigation from '../../components/Dashboard/Sidebar/SidebarNavigation';
import { useStyles } from './dashboard_layout.styles';
import Header from '../../components/Dashboard/Header';
import { Container } from '../../components/Global';
import useDrawer from '../../hooks/useDrawer';
const DashboardLayout = ({ navigationData, children }) => {
  const classes = useStyles();
  const [mobileOpen, handleDrawerToggle] = useDrawer();

  return (
    <Container>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Hidden smDown>
        <SidebarNavigation
          variant='permanent'
          mobileOpen={false}
          data={navigationData}
        />
      </Hidden>
      <Hidden mdUp>
        <SidebarNavigation
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          data={navigationData}
        />
      </Hidden>
      <Box className={classes.content}>
        <Box className={classes.toolbar} />
        <Box>{children}</Box>
      </Box>
    </Container>
  );
};

export default DashboardLayout;
