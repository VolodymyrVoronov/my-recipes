import React from "react";
import { useStore } from "./../../store/recipes";
// @ts-ignore
import { useWindowSize } from "@withvoid/melting-pot";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import foodPhoto01 from "../../assets/foodPhoto01.jpg";
import iconVegan01 from "../../assets/iconVegan01.svg";

import useStyles from "./RecipeStyles";
import { Dialog } from "@material-ui/core";

interface IProps {
  id?: string;
  vegan: boolean;
  recipeName: string;
  description: string;
  photoOfTheRecipe: string;
  tags: string;
  isFavorite: boolean;
  areThereAnyFavoriteRecipes: boolean;
}

const Recipe = ({
  id = `0`,
  vegan,
  recipeName,
  description,
  photoOfTheRecipe,
  tags,
  isFavorite,
}: IProps): React.ReactElement => {
  const {
    isTogglingFavorite,
    isFavoriteRecipesOpen,
    toggleFavorite,
    setCurrentRecipeId,
    deleteRecipe,
  }: {
    isTogglingFavorite: boolean;
    isFavoriteRecipesOpen: boolean;
    toggleFavorite: (id: string) => void;
    setCurrentRecipeId: (id: string) => void;
    deleteRecipe: (id: string) => void;
  } = useStore();
  const classes = useStyles();

  const [isModalOpen, setIsModelOpen] = React.useState(false);

  const { width } = useWindowSize();

  const onToggleFavoriteButtonClick = (): void => {
    toggleFavorite(id);
  };

  const onEditButtonClick = (): void => {
    setCurrentRecipeId(id);
  };

  const onDeleteButtonClick = (): void => {
    setIsModelOpen(true);
  };

  const onDeleteConfirmButtonClick = () => {
    deleteRecipe(id);
    setIsModelOpen(false);
    setCurrentRecipeId(``);
  };

  const onCancelButtonClick = () => {
    setIsModelOpen(false);
  };

  return (
    <Card elevation={3}>
      <Dialog
        open={isModalOpen}
        onClose={onCancelButtonClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you really want to delete this recipe?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={onCancelButtonClick}
            variant="outlined"
            color="primary"
            size="large"
          >
            No
          </Button>
          <Button
            onClick={onDeleteConfirmButtonClick}
            variant="outlined"
            color="secondary"
            size="large"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <CardHeader
        className={classes.RecipeHeader}
        action={
          <>
            <IconButton
              className={
                isFavorite
                  ? `${classes.RecipeFavoriteButtonActive}`
                  : `${classes.RecipeFavoriteButton}`
              }
              aria-label="Add to favorite"
              onClick={onToggleFavoriteButtonClick}
              disabled={isTogglingFavorite}
            >
              <FavoriteIcon fontSize={width > 960 ? "large" : "default"} />
            </IconButton>

            <IconButton
              className={classes.RecipeDeleteButton}
              aria-label="Edit recipe"
              onClick={onDeleteButtonClick}
            >
              <DeleteIcon fontSize={width > 960 ? "large" : "default"} />
            </IconButton>

            {!isFavoriteRecipesOpen && (
              <IconButton
                className={classes.RecipeEditButton}
                aria-label="Edit recipe"
                onClick={onEditButtonClick}
              >
                <EditIcon fontSize={width > 960 ? "large" : "default"} />
              </IconButton>
            )}

            {vegan ? (
              <IconButton disabled>
                <img
                  className={classes.VeganIcon}
                  src={iconVegan01}
                  alt="Vegan icon"
                />
              </IconButton>
            ) : (
              ``
            )}
          </>
        }
        title={recipeName}
        subheader={tags
          .toString()
          .split(" ")
          .map((tag) => ` #${tag}`)}
      />
      <CardMedia
        className={classes.RecipePhoto}
        image={photoOfTheRecipe || foodPhoto01}
        title={recipeName}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Recipe;
