import React from 'react';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { themeL, themeD } from '../themes';
import { mainNavigation, mainRoutes } from '../components/Dashboard/Sidebar/data';
import RoutesWithLayout from '../components/Dashboard/Sidebar/RoutesWithLayout';

const PrivateRoutes = () => {
  const [darkMode, setDarkMode] = React.useState(() => {
    const dark = localStorage.getItem('dark');
    if (dark) {
      return JSON.parse(dark);
    } else {
      return false;
    }
  });

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark', !darkMode);
  };

  const themeSwitchCofig = {
    state: darkMode,
    handler: darkModeToggle,
  };

  const appliedTheme = createTheme(darkMode ? themeD : themeL);
  return (
    <Router>
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
    </Router>
  );
};

export default PrivateRoutes;
