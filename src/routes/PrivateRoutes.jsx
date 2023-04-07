import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  mainNavigation,
  mainRoutes,
} from '../components/Dashboard/Sidebar/data';
import RoutesWithLayout from '../components/Dashboard/Sidebar/RoutesWithLayout';
import useModeTheme from '../hooks/useModeTheme';

const PrivateRoutes = () => {
  const [themeSwitchCofig, appliedTheme] = useModeTheme();
  return (
    <ThemeProvider theme={appliedTheme}>
      <RoutesWithLayout
        layout={DashboardLayout}
        routes={mainRoutes}
        LayoutProps={{
          navigationData: mainNavigation,
          themeConfig: themeSwitchCofig,
        }}
      />
    </ThemeProvider>
  );
};

export default PrivateRoutes;
