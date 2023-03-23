import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router';
//hook//////////
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

const Routes = ({ routes }) => {
  const match = useRouteMatch();
  let renderRoutes = routes.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
  ));
  //hook//////////
  return (
    <>
       <Switch>{renderRoutes}</Switch>
      <Route path={`${match.path}/`} exact={true}>
        <Redirect to={`${routes[0].path}`} />
      </Route>
   
    </>
  );
};

export default Routes;
