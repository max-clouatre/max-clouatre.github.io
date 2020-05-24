import React from "react";
import { createNavLink, createRoute } from "../../utils/routing";

export const WorkPage = () => {
  return (
    <div className="work-page">
      Work Page!
      <p>I have worked at a few cool places!</p>
    </div>
  );
};

export const WorkPageRoute = createRoute(
  "/work",
  WorkPage,
  createNavLink("/work", "Work")
);
