import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey"
import ItemGrid from "../../components/ItemGrid";

const Items = ({ classes, items }) => {
  return (
    <div className={classes.root}>
      <ItemGrid items={items} />
    </div>
  );
};

export default Items;
