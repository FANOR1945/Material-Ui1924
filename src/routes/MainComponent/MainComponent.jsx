import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoutes from '../PrivateRoutes';

import Presentation from '../../pages/LandingPages/Presentation';
import SignIn from '../../pages/LandingPages/authentication/SignIn';
import ContactUs from '../../pages/LandingPages/ContactUs';
function MainComponent() {
  return <PrivateRoutes />;
}

function RenterRoutes() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Presentation}
      />
      <Route
        path='/sign-in'
        component={SignIn}
      />
      <Route
        exact
        path='/contact-us'
        component={ContactUs}
      />
      <Route
        path={`/`}
        component={MainComponent}
      />
    </Switch>
  );
}

export default RenterRoutes;
