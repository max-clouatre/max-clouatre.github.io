import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";

const AppContextProvider = (props) => {
  const { children } = props;

  return <Router>{children}</Router>;
};

export default AppContextProvider;
