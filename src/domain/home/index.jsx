import React from "react";
import { createNavLink, createRoute } from "../../utils/routing";

export const HomePage = () => {
  return (
    <div className="home-page">
      <p>This is going to be Max's public portfolio!</p>
      <p>He has a lot to set up first though</p>

      <p>First I am going to start with the initial app structure.</p>

      <p>hmmm, need to get a css reset probably</p>
      <p>
        I am working on pushing this to github pages now! Trying another
        change..
      </p>
    </div>
  );
};

export const HomePageRoute = createRoute(
  ["/", "/home"],
  HomePage,
  createNavLink("/", "Home")
);
