import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemPreview from "../../components/ShareItemPreview";
import ShareItemForm from "../../components/ShareItemForm";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";

/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.
*/

import { SwipeableDrawer } from "@material-ui/core";

const Share = ({ tags, classes }) => {
  return (
    <div className="share-container">
    <CardHeader/>
      <Grid container spacing={0} justify="space-around">
        <Grid item xs={4}>
          <ShareItemPreview />
        </Grid>
        <Grid item xs={4}>
          <ShareItemForm tags={tags} classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Share);
