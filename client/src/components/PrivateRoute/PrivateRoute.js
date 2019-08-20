import { Route, Redirect } from "react-router-dom";
import React from "react";
import { ViewerContext } from "../../context/ViewerProvider";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => (
        <Route
          render={props => {
            if (viewer) return <Component {...props} />;
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            );
          }}
          {...rest}
        />
      )}
    </ViewerContext.Consumer>
  );
};

export default PrivateRoute;
