import React, { Component } from "react";
import Items from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { ViewerContext } from "../../context/ViewerProvider";

const ItemsContainer = ({ classes }) => {
  return (
    // TODO: Remove filter and make it dynamic based on logged in user
    <ViewerContext.Consumer>
      {({ viewer }) => (
        <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
          {({ loading, error, data }) => {
            if (loading) return <FullScreenLoader inverted />;
            if (error) return <p>{`Error! ${error.message}`}</p>;
            return <Items classes={classes} items={data.items} />;
          }}
        </Query>
      )}
    </ViewerContext.Consumer>
  );
};

ItemsContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemsContainer);
