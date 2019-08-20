import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import ProfileContainer from "../pages/Profile";
import ItemsContainer from "../pages/Items";
import HomeContainer from "../pages/Home";
import ShareContainer from "../pages/Share";
import PRoute from "../components/PrivateRoute";
import { ViewerContext } from "../context/ViewerProvider";
import FullScreenLoader from "../components/FullScreenLoader";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return <FullScreenLoader />;
      if (!viewer) {
        return (
          <Switch>
            <Route path="/welcome" component={HomeContainer} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <Switch>
            <PRoute path="/welcome" component={HomeContainer} />
            <PRoute path="/items" component={ItemsContainer} />
            <PRoute path="/profile" exact component={ProfileContainer} />
            <PRoute path="/profile/:userid" component={ProfileContainer} />
            <PRoute path="/share" component={ShareContainer} />
            <Redirect from="*" to="/items" />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
