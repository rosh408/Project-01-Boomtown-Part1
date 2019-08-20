import React, { Component } from "react";
import Profile from "./Profile";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
// import {  } from '../../apollo/queries';
import { ViewerProvider } from "../../context/ViewerProvider";

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerProvider>
        <Profile />
      </ViewerProvider>
    );
  }
}

export default ProfileContainer;
