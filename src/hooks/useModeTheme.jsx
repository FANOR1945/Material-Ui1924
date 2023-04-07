import { useContext } from 'react';
import { CustomThemeContext } from '../assets/Theme/themes/CustomThemeProvider';
const useModeTheme = () => {
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === 'dark');

  const handleThemeChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('normal');
    }
  };

  return [isDark, handleThemeChange];
};

export default useModeTheme;
