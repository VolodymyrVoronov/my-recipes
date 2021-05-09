import React from "react";
import { useStore, IRecipe } from "./../../store/recipes";
// @ts-ignore
import FileBase from "react-file-base64";

import {
  TextField,
  Button,
  Typography,
  Paper,
  ButtonGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import useStyles from "./FormStyles";

type FormState = {
  _id?: string;
  id?: string;
  recipeName: string;
  description: string;
  tags: string;
  photoOfTheRecipe: string;
  vegan: boolean;
  isFavorite: boolean;
};

const Form = (): React.ReactElement => {
  const classes = useStyles();

  const {
    recipes,
    currentRecipeId,
    isLoading,
    addRecipe,
    updatedRecipe,
    setCurrentRecipeId,
  }: {
    recipes: IRecipe[];
    currentRecipeId: string | null;
    isLoading: boolean;
    addRecipe: (newRecipe: IRecipe) => void;
    setCurrentRecipeId: (id: string) => void;
    updatedRecipe: (id: string, updatedRecipe: IRecipe) => void;
  } = useStore();

  const initialFormState = {
    recipeName: "",
    description: "",
    tags: "",
    photoOfTheRecipe: "",
    vegan: false,
    isFavorite: false,
  };

  const [recipe, setRecipeData] = React.useState<FormState>(initialFormState);

  let recipeToEdit = currentRecipeId
    ? recipes.find((recipe) => recipe._id === currentRecipeId)
    : null;

  const clearForm = () => {
    setRecipeData({
      recipeName: "",
      description: "",
      tags: "",
      photoOfTheRecipe: "",
      vegan: false,
      isFavorite: false,
    });
  };

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeData({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentRecipeId) {
      updatedRecipe(currentRecipeId, recipe);
      clearForm();
      setCurrentRecipeId(``);
    } else {
      addRecipe(recipe);
      clearForm();
    }
  };

  const onClearFormClick = () => {
    clearForm();
    setCurrentRecipeId(``);
  };

  React.useEffect(() => {
    if (recipeToEdit) {
      setRecipeData(recipeToEdit);
    }
  }, [recipeToEdit]);

  React.useEffect(() => {
    if (!currentRecipeId) {
      clearForm();
    }
  }, [currentRecipeId]);

  return (
    <Paper className={classes.FormContainer} elevation={3}>
      <fieldset disabled={isLoading} className={classes.FormFieldset}>
        <form
          className={classes.FormBody}
          autoComplete="off"
          noValidate
          onSubmit={onFormSubmit}
        >
          <Typography variant="h5">
            {currentRecipeId
              ? `Editing "${recipeToEdit?.recipeName}"`
              : "Add new recipe"}
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={recipe.vegan}
                onChange={() =>
                  setRecipeData({ ...recipe, vegan: !recipe.vegan })
                }
                name="vegan"
                color="primary"
              />
            }
            label="Vegan"
          />
          <TextField
            name="recipeName"
            variant="outlined"
            label="Recipe name"
            fullWidth
            value={recipe.recipeName}
            onChange={onFormInputChange}
            required
            margin="normal"
          />
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            rows={10}
            value={recipe.description}
            onChange={onFormInputChange}
            required
            margin="normal"
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            value={recipe.tags}
            onChange={onFormInputChange}
            required
            margin="normal"
          />
          <div className={classes.FromFileInput}>
            <FileBase
              type="file"
              multiple={false}
              required
              onDone={({ base64 }: any) =>
                setRecipeData({ ...recipe, photoOfTheRecipe: base64 })
              }
            />
          </div>
          <Typography variant="body2">* These fields are required</Typography>
          <ButtonGroup fullWidth variant="contained" color="primary">
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
              disabled={
                recipe.recipeName?.length === 0 ||
                recipe.description?.length === 0 ||
                recipe.tags?.length === 0
              }
              startIcon={<AddCircleIcon />}
            >
              {currentRecipeId ? `Save` : `Add`}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={onClearFormClick}
              fullWidth
              disabled={
                recipe.recipeName?.length === 0 &&
                recipe.description?.length === 0 &&
                recipe.tags?.length === 0
              }
              startIcon={<CancelIcon />}
            >
              {currentRecipeId ? `Cancel` : `Clear`}
            </Button>
          </ButtonGroup>
        </form>
      </fieldset>
    </Paper>
  );
};

export default Form;
