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
import { renderToStringWithData } from "react-apollo";

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

export class ItemCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <Card>
              <Grid container>
                <Typography>
                  <img src={item.imageurl} />
                  <Grid item xs={4}>
                    <CardContent style={{ height: 450, width: 430 }}>
                      <Gravatar
                        style={{ borderRadius: 50 }}
                        email=""
                        size={40}
                      />
                      <p>{item.tags.map(tag => tag.title)}</p>
                      <p>{item.borrower.fullname}</p>
                      <p>{item.created}</p>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
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
  }
}
export default ItemCard;
