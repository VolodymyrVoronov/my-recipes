import React from "react";
import { useStore, IRecipe } from "./../../store/recipes";

import Recipe from "../Recipe/Recipe";

import { Grid } from "@material-ui/core";

const Recipes = (): React.ReactElement => {
  const {
    recipes,
    toggleFavoriteRecipes,
  }: {
    recipes: IRecipe[];
    toggleFavoriteRecipes: (toogle: boolean) => void;
  } = useStore();

  const areThereAnyFavoriteRecipes = recipes.some(
    (recipe: { isFavorite: boolean }) => recipe.isFavorite
  );

  React.useEffect(() => {
    if (!areThereAnyFavoriteRecipes) {
      toggleFavoriteRecipes(false);
    }
  }, [areThereAnyFavoriteRecipes, toggleFavoriteRecipes]);

  return (
    <Grid container justify="space-between" alignItems="stretch" spacing={5}>
      {recipes.map((recipe) => {
        const {
          _id,
          vegan,
          recipeName,
          description,
          photoOfTheRecipe,
          tags,
          isFavorite,
        } = recipe;

        return (
          <Grid key={recipe._id} item xs={12}>
            <Recipe
              id={_id}
              vegan={vegan}
              recipeName={recipeName}
              description={description}
              photoOfTheRecipe={photoOfTheRecipe}
              tags={tags}
              isFavorite={isFavorite}
              areThereAnyFavoriteRecipes={areThereAnyFavoriteRecipes}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Recipes;
