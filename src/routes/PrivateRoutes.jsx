import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  mainNavigation,
  mainRoutes,
} from '../components/Dashboard/Sidebar/data';
import RoutesWithLayout from '../components/Dashboard/Sidebar/RoutesWithLayout';
import CustomThemeProvider from '../assets//Theme/themes/CustomThemeProvider';
const PrivateRoutes = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <RoutesWithLayout
        layout={DashboardLayout}
        routes={mainRoutes}
        LayoutProps={{
          navigationData: mainNavigation,
        }}
      />
    </CustomThemeProvider>
  );
};

export default PrivateRoutes;
