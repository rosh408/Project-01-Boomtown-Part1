import React, { Component } from "react";
import ItemCard from "../ItemCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ShareItemPreview = ({ shareItemPreview }) => {
  console.log(shareItemPreview);
  return (
    <div>
      <ItemCard item={shareItemPreview} />
    </div>
  );
};

// connects mapStateToProps to shareItemPreview
const mapStateToProps = ({ shareItemPreview }) => {
  return {
    shareItemPreview
  };
};

ShareItemPreview.propTypes = {
  shareItemPreview: PropTypes.shape({
    created: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    itemowner: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  })
};

// connects
export default connect(mapStateToProps)(ShareItemPreview);
