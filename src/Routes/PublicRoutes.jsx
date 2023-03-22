import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Theme from '../assets/Theme';
import Presentation from '../pages/Presentation';
import SignIn from '../pages/LandingPages/authentication/SignIn';
import ContactUs from '../pages/LandingPages/ContactUs';
import ProviderDrawer from '../context/AdapterDrawer/Settings/ProviderDrawer';

const PublicRoutes = (props) => {
  return (
    <ProviderDrawer>
      <Theme>
        <Router>
          <Switch>
            <Route exact path='/' component={Presentation} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/contact-us' component={ContactUs} />
          </Switch>
        </Router>
      </Theme>{' '}
    </ProviderDrawer>
  );
};

export default PublicRoutes;