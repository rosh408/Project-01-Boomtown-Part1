import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";
import PropTypes from "prop-types"

const FullScreenLoader = ({ classes }) => {
  return <CircularProgress className={classes.progress} />;
};

FullScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FullScreenLoader);
