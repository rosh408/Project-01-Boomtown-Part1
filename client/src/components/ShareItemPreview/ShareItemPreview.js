import React, { Component } from "react";
import ItemCard from "../ItemCard";
import { connect } from "react-redux";

const ShareItemPreview = ({ shareItemPreview }) => {
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

// connects
export default connect(mapStateToProps)(ShareItemPreview);
