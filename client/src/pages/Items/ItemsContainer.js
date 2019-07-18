import React, { Component } from "react";
import Items from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
// import { } from '../../apollo/queries';
import { ALL_ITEMS_QUERY } from "../../apollo/queries";

class ItemsContainer extends Component {
  render() {
    return <FullScreenLoader />;
    return (
      <Query query={ALL_ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Items classes={this.props.classes} items={data.items} />;
        }}
      </Query>
    );
  }
}

// export default withStyles(styles)(ItemsContainer);
export default ItemsContainer;
