import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import grey from "@material-ui/core/colors/grey";
import ItemGrid from "../../components/ItemGrid";
import PropTypes from "prop-types";

const Items = ({ classes, items }) => {
  return (
    <div className={classes.root}>
      <ItemGrid items={items} />
    </div>
  );
};

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default Items;
