import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePageRoute } from "../domain/home";
import { WorkPageRoute } from "../domain/work";

const routes = [HomePageRoute, WorkPageRoute];

export const ContentRoutes = () => {
  return (
    <Switch>
      {routes.map(({ path, component, exact }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
    </Switch>
  );
};

export const NavLinks = routes.map((route, index) => {
  if (!route.navLink) return null;

  return (
    <div key={index} className="nav-link">
      {route.navLink}
    </div>
  );
});
