import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Items from "../../pages/Items";
import ItemCard from "../../components/ItemCard";
import { Grow } from "@material-ui/core";
import PropTypes from "prop-types";

const ItemGrid = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item, i) => {
        return (
          <Grid item xs={12} md={6} lg={4}>
            <ItemCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

ItemGrid.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemGrid;
