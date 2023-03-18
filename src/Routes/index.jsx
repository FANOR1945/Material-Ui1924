import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from "../assets/Theme";
import Presentation from "../pages/Presentation";
import SignIn from "../pages/LandingPages/authentication/SignIn";
import ContactUs from "../pages/LandingPages/ContactUs";
import Sidebar from "../components/Dashboard/Sidebar";
const Routes = (props) => {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route exact path="/sas" component={Presentation} />
          <Route exact path="/" component={Sidebar} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    </Theme>
  );
};

export default Routes;
