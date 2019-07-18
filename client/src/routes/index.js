import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import ItemsContainer from "../pages/Items";
import HomeContainer from "../pages/Home";
import ShareContainer from "../pages/Share";
import ProfileContainer from "../pages/Profile";

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
      <Route path="/items" exact component={ItemsContainer} />
      <Route path="/welcome" exact component={HomeContainer} />
      <Route path="/share" exact component={ShareContainer} />
      <Route path="/profile" exact component={ProfileContainer} />
      <Route path="/profile/:userid" component={ProfileContainer} />
      <Redirect from="/allitems" to="/items" />
    </Switch>
  </Fragment>
);
