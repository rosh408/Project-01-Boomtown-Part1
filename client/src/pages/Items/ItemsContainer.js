import React, { Component } from "react";
import Items from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import styles from "./styles";
import {withStyles} from "@material-ui/core/styles"
class ItemsContainer extends Component {
  render() {
    return (
      // TODO: Remove filter and make it dynamic based on logged in user
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Items classes={this.props.classes} items={data.items} />;
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(ItemsContainer);
