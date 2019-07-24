import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";

import { BrowserRouter as Router, Link } from "react-router-dom";

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    <Switch>
      {/**
       * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
       *
       * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
      <Route path="/items" exact component={Items} />
      <Route path="/welcome" exact component={Home} />
      <Route path="/share" exact component={Share} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/:userid" component={Profile} />
      <Redirect from="/" to="/items" />
    </Switch>
  </Fragment>
);
