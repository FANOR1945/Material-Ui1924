import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from '../PrivateRoutes';
import Presentation from '../../pages/LandingPages/Presentation';
import SignIn from '../../pages/LandingPages/authentication/SignIn';
import RePassword from '../../pages/LandingPages/authentication/RePassword';
import AboutUs from '../../pages/LandingPages/AboutUs';
import SeedsOurs from '../../pages/LandingPages/SeedsOurs';
import ServicesOurs from '../../pages/LandingPages/ServicesOurs';
import ContactUs from '../../pages/LandingPages/ContactUs';

const RenterRoutes = () => {
  return (
 
      <Switch>
        <Route
          exact
          path='/'
          component={Presentation}
        />
        <Route
          exact
          path='/about-us'
          component={AboutUs}
        />
        <Route
          exact
          path='/seeds-ours'
          component={SeedsOurs}
        />
        <Route
          exact
          path='/services-ours'
          component={ServicesOurs}
        />
        <Route
          exact
          path='/contact-us'
          component={ContactUs}
        />
        <Route
          path='/sign-in'
          component={SignIn}
        />
        <Route
          path='/re-password'
          component={RePassword}
        />
        <PrivateRoutes />
      </Switch>

  );
};

export default RenterRoutes;
