import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";

const FullScreenLoader = ({ classes }) => {
  return <CircularProgress className={classes.progress} />;
};

export default withStyles(styles)(FullScreenLoader);
