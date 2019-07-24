import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
// import Gravatar from "react-gravatar";
import ItemGrid from "../../components/ItemGrid";

const Items = ({ classes, items }) => {
  return (
    <div>
      {/* <Gravatar email="rosh_408@hotmail.com"/> */}
      <ItemGrid items={items} />
    </div>
  );
};

export default withStyles(styles)(Items);
