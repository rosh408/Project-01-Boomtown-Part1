import { Query } from "react-apollo";
import React, { Fragment } from "react";
import { VIEWER_QUERY } from "../apollo/queries";

export const ViewerContext = React.createContext();

export const ViewerProvider = ({ children }) => {
  /**
   * @TODO: Create the ViewerContext provider to supply information about
   * the currently logged-in user throughout the application.
   *
   * Replace the <Fragment /> component with an Apollo <Query /> component
   * with a <ViewerContext.Provider /> nested inside that wrap the children.
   */
  // return (
  // this shows whos logged in
  // <Query query={VIEWER_QUERY}>
  // {({ data, loading }) => {
  // const viewer = data && data.viewer ? data.viewer : null;

  const viewer = {
    id: 1,
    email: "test@example.com",
    fullname: "Test User",
    bio: "No bio"
  };
  // const viewer = null
  const loading = false;

  return (
    <ViewerContext.Provider value={{ viewer, loading }}>
      {children}
    </ViewerContext.Provider>
  );
  // }}
  // </Query>
  // )
};

//
// import { Query } from 'react-apollo';
// import React from 'react';

// import { VIEWER_QUERY } from '../apollo/queries';

// export const ViewerContext = React.createContext();

// export const ViewerProvider = ({ children }) => {
//  return (
//    <Query query={VIEWER_QUERY}>
//      {({ data, loading }) => {
//        const viewer = data && data.viewer ? data.viewer : null;
//        return (
//          <ViewerContext.Provider value={{ viewer, loading }}>
//            {children}
//          </ViewerContext.Provider>
//        );
//      }}
//    </Query>
//  );
// };
