import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { themeL, themeD } from '../themes';
const useModeTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
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

  const appliedTheme = createMuiTheme(darkMode ? themeD : themeL);

  return [themeSwitchCofig, appliedTheme];
};

export default useModeTheme;
