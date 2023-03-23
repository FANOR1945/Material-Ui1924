import React from 'react';
import { useHistory } from 'react-router';
export const useDrawer = () => {
  const history = useHistory();
  const [extended, setExtended] = React.useState(true);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleExtendOpen = () => {
    setExtended(true);
  };
  const handleExtendClose = () => {
    setExtended(false);
  };

  React.useEffect(() => {
    history.listen(() => setMobileOpen(false));
  }, [history]);
  return [
    extended,
    mobileOpen,
    handleDrawerToggle,
    handleExtendClose,
    handleExtendOpen,
  ];
};
