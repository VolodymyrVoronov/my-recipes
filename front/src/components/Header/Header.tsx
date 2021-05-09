import React from "react";

import { IRecipe, useStore } from "./../../store/recipes";

import {
  AppBar,
  Grid,
  Typography,
  Grow,
  Fab,
  Tooltip,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";

import useStyles from "./HeaderStyles";

import iconForkKnife01 from "../../assets/iconForkKnife01.svg";

const Header = (): React.ReactElement => {
  const classes = useStyles();

  const {
    recipes,
    isTogglingFavorite,
    toggleFavoriteRecipes,
  }: {
    recipes: IRecipe[];
    isTogglingFavorite: boolean;
    toggleFavoriteRecipes: (toogle: boolean) => void;
  } = useStore();

  const amountOfFavoriteRecipes = recipes.filter(
    (recipe: { isFavorite: boolean }) => recipe.isFavorite
  ).length;

  const areThereAnyFavoriteRecipes = recipes.some(
    (recipe: { isFavorite: boolean }) => recipe.isFavorite
  );

  const onFavoriteRecipesButtonClick = (): void => {
    toggleFavoriteRecipes(true);
  };

  return (
    <AppBar className={classes.Header} position="static">
      <Grow in>
        <Grid item>
          <Grid container alignItems="center" justify="center" direction="row">
            <img
              className={classes.HeaderIcon}
              src={iconForkKnife01}
              alt="Icon fork and knife"
            />
            <Typography
              className={classes.HeaderTitle}
              variant="h4"
              align="center"
            >
              My Recipes
            </Typography>
            <Fab
              onClick={onFavoriteRecipesButtonClick}
              disabled={!areThereAnyFavoriteRecipes || isTogglingFavorite}
              color="inherit"
              className={classes.HeaderFavoriteButton}
              aria-label="Favorite recipes"
            >
              <Tooltip title={amountOfFavoriteRecipes} placement="right">
                <FavoriteIcon className={classes.HeaderFavoriteButtonIcon} />
              </Tooltip>
            </Fab>
          </Grid>
        </Grid>
      </Grow>
    </AppBar>
  );
};

export default Header;
