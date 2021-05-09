import { useStore, IRecipe } from "./../../store/recipes";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@material-ui/core";
import Recipe from "../Recipe/Recipe";

const FavoriteRecipes = () => {
  const {
    isFavoriteRecipesOpen,
    recipes,
    toggleFavoriteRecipes,
  }: {
    isFavoriteRecipesOpen: boolean;
    recipes: IRecipe[];
    toggleFavoriteRecipes: (toogle: boolean) => void;
  } = useStore();

  const onCloseButtonClick = () => {
    toggleFavoriteRecipes(false);
  };

  const areThereAnyFavoriteRecipes = recipes.some(
    (recipe: { isFavorite: boolean }) => recipe.isFavorite
  );

  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  return (
    <>
      <Dialog
        fullScreen={true}
        open={isFavoriteRecipesOpen}
        onClose={onCloseButtonClick}
      >
        <DialogTitle>Favorite recipes</DialogTitle>
        <DialogContent>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={5}
          >
            {favoriteRecipes.map((recipe) => {
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
                <Grid
                  key={recipe._id}
                  item
                  xs={12}
                  lg={favoriteRecipes.length > 1 ? 6 : 12}
                  style={{ padding: "20px 5px" }}
                >
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onCloseButtonClick}
            variant="contained"
            color="primary"
            size="large"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FavoriteRecipes;
