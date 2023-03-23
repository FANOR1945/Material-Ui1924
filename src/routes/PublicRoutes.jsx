import React from "react";
import { Route, Switch } from "react-router-dom";
import Theme from "../assets/Theme";
import Presentation from "../pages/LandingPages/Presentation";
import SignIn from "../pages/LandingPages/authentication/SignIn";
import ContactUs from "../pages/LandingPages/ContactUs";

const PublicRoutes = (props) => {
  return (
    <Theme>
      <Switch>
        <Route
          exact
          path='/'
          component={Presentation}
        />
        <Route
          exact
          path='/sign-in'
          component={SignIn}
        />
        <Route
          exact
          path='/contact-us'
          component={ContactUs}
        />
      </Switch>
    </Theme>
  );
};

export default PublicRoutes;
