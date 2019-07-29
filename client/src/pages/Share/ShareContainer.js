import React, { Component } from 'react';
import Share from './Share';
import { Query } from 'react-apollo';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ALL_TAGS_QUERY } from "../../apollo/queries";

// Hint: query tags
class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, classes }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Share />
        }}
      </Query>
    );
  }
}

export default ShareContainer;
