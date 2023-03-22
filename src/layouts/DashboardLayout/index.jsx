import React from 'react';
import { CssBaseline, Drawer, Hidden, Box } from '@material-ui/core';
import SidebarNavigation from '../../components/Dashboard/SidebarNavigation';
import { useStyles } from './dashboard_layout.styles';
import Header from '../../components/Dashboard/Header';

const DashboardLayout = ({ navigationData, children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header />
      <Hidden smDown>
        <Drawer
          variant='permanent'
          anchor='left'
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {' '}
          <SidebarNavigation data={navigationData} />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer variant='temporary'>
          {' '}
          <SidebarNavigation data={navigationData} />
        </Drawer>
      </Hidden>
      <Box className={classes.content}>
        <Box className={classes.toolbar} />
        <Box
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
