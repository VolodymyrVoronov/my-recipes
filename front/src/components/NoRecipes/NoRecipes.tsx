import React from "react";

import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";

import useStyles from "./NoRecipesStyles";

import foodPhoto02 from "./../../assets/foodPhoto02.jpg";

const NoRecipes = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Card elevation={3}>
      <CardHeader title="You don't have any recipes yet." />
      <CardMedia
        className={classes.NoRecipePhoto}
        image={foodPhoto02}
        title="Food photo"
      />
      <CardContent>
        <Typography variant="body1" component="p">
          Fill the form to add new one.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoRecipes;
