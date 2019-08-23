import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Gravatar from "react-gravatar";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { ViewerContext } from "../../context/ViewerProvider";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const ItemCard = ({ item, classes }) => {
  console.log(item);
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        return (
          <Card>
            <Grid container>
              <Typography>
                <Grid item xs={4}>
                  <CardContent
                    style={{ height: 450, width: 390 }}
                    className={classes.flex}
                  >
                    <img src={item.imageurl} className={classes.imageStyle} />
                    <div className={classes.flexRow}>
                      <Gravatar
                        style={{ borderRadius: 50 }}
                        email="rosh_408@hotmail.com"
                        size={40}
                      />
                      <div>
                        <p>{item.itemowner.fullname}</p>
                        <p>{item.created}</p>
                      </div>
                    </div>
                    <div className={classes.flex}>
                      <h3>{item.title}</h3>
                      <p>{item.tags}</p>
                      <p>{item.description}</p>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      style={{ border: 1, borderColor: "#000" }}
                    >
                      Borrow
                    </Button>
                  </CardActions>
                </Grid>
              </Typography>
            </Grid>
          </Card>
        );
      }}
    </ViewerContext.Consumer>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    borrower: PropTypes.object.isRequired,
    created: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    itemowner: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    __typename: PropTypes.string.isRequired
  })
};
export default withStyles(styles)(ItemCard);
