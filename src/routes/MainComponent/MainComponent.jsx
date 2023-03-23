import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoutes from "../PrivateRoutes";
import PublicRoutes from "../PublicRoutes";

function MainComponent() {
  return <PrivateRoutes />;
}

function RenterRoutes() {
  return (
    <Switch>
      <Route
        exact
        path={`/major`}
        component={MainComponent}
      />
      <Route
        path={`/`}
        component={PublicRoutes}
      />
    </Switch>
  );
}

export default RenterRoutes;
