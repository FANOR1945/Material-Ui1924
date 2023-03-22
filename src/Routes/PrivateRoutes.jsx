import React from 'react';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { themeL, themeD } from '../themes';
import { mainNavigation, mainRoutes } from '../data';
import RoutesWithLayout from '../components/Dashboard/RoutesWithLayout';

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
      <Switch>
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
      </Switch>
    </Router>
  );
};

export default PrivateRoutes;
