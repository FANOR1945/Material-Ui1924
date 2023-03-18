import React, { useState } from "react";
import AroundDrawer from "../AroundDrawer/index.jsx";

const storage = {
  getItem(key) {
    if (localStorage) {
      return localStorage.getItem(key);
    }
  },
  setItem(key, value) {
    if (localStorage) {
      return localStorage.setItem(key, value);
    }
  },
};

const ProviderDrawer = (props) => {
  const [darkMode, setDarkMode] = useState(
    storage.getItem("darkMode") === "true"
  );
  const onSetDarkMode = (darkMode) => {
    setDarkMode(darkMode);
    storage.setItem("darkMode", darkMode);
  };
  return (
    <AroundDrawer.Provider
      value={{
        darkMode,
        onSetDarkMode,
      }}
    >
      {props.children}
    </AroundDrawer.Provider>
  );
};

export default ProviderDrawer;
