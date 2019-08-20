import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  card: {
    minWidth: 430
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ItemCard = ({ item }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        return (
          <Card>
            <Grid container>
              <Typography>
                <Grid item xs={4}>
                  <CardContent style={{ height: 450, width: 430 }}>
                    <Gravatar style={{ borderRadius: 50 }} email="" size={40} />
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
export default ItemCard;
