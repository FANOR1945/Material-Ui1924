import React, { useContext } from "react";
import { Container } from "../../components/Global";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./dashboard_layout.styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../assets/Theme/AroundSettings/default";
import darkTheme from "../../assets/Theme/AroundSettings/dark";
import Sidebar from "../../components/Dashboard/Sidebar";
import SettingsContext from "../../context/AdapterDrawer/Settings/AroundDrawer/index.jsx";
import ProviderDrawer from "../../context/AdapterDrawer/Settings/ProviderDrawer";

const DashboarLayout = (props) => {
  const classes = useStyles();
  const context = useContext(SettingsContext);
  const theme = context.darkMode ? darkTheme : defaultTheme;
  return (
    <Container className={classes.dashboard_layout}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Sidebar />
        {props.children}
      </MuiThemeProvider>{" "}
    </Container>
  );
};

export default DashboarLayout;
