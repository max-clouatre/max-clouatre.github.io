import React from "react";
import { NavLink } from "react-router-dom";

export const createRoute = (path, component, navLink = null, exact = true) => ({
  path,
  component,
  navLink,
  exact,
});

export const createNavLink = (to, text) => (
  <NavLink to={to} exact activeClassName="nav-link-active">
    {text}
  </NavLink>
);
