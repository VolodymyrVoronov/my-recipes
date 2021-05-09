import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  recipeName: String,
  description: String,
  tags: [String],
  photoOfTheRecipe: String,
  vegan: Boolean,
  isFavorite: Boolean,
});

const RecipeMessage = mongoose.model("RecipeMessage", recipeSchema);

export default RecipeMessage;
