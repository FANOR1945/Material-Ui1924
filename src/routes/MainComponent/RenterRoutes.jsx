import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PublicRoutes from "../PublicRoutes";
export default function RenterRoutes() {
  return (
    <Switch>
      <Route
        exact
        path={`/`}
        component={PublicRoutes}
      />
      <Redirect
        exact
        from={"/"}
        to={"/home"}
      />
    </Switch>
  );
}
