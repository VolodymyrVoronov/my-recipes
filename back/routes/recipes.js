import express from "express";

import {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  toggleFavorite,
} from "./../controllers/recipes.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);
router.patch("/:id/toggleFavorite", toggleFavorite);

export default router;
