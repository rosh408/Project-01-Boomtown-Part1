import { Query } from "react-apollo";
import React, { Fragment } from "react";
import { VIEWER_QUERY } from "../apollo/queries";

export const ViewerContext = React.createContext();

export const ViewerProvider = ({ children }) => {

  const viewer = {
    id: 1,
    email: "test@example.com",
    fullname: "Test User",
    bio: "No bio"
  };
  const loading = false;
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, loading }) => {
        return (
          <ViewerContext.Provider value={{ viewer, loading }}>
          {children}
        </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};