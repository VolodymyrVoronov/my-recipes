import create from "zustand";

import {
  addRecipe,
  fetchRecipes,
  updateRecipe,
  deleteRecipe,
  toggleFavorite,
} from "../api/api";

export interface IRecipe {
  _id?: string;
  id?: string;
  vegan: boolean;
  recipeName: string;
  description: string;
  photoOfTheRecipe: string;
  tags: string;
  isFavorite: boolean;
}

type Store = {
  recipes: IRecipe[];
  isLoading: boolean;
  isTogglingFavorite: boolean;
  currentRecipeId: string | null;
  isFavoriteRecipesOpen: boolean;

  getRecipes: () => void;
  addRecipe: (newRecipe: IRecipe) => void;
  setCurrentRecipeId: (id: string) => void;
  updatedRecipe: (id: string, updatedRecipe: IRecipe) => void;
  deleteRecipe: (id: string) => void;
  toggleFavorite: (id: string) => void;
  toggleFavoriteRecipes: (toogle: boolean) => void;
};

export const useStore = create<Store>((set, get) => ({
  recipes: [],
  isLoading: false,
  isTogglingFavorite: false,
  currentRecipeId: null,
  isFavoriteRecipesOpen: false,

  getRecipes: async () => {
    try {
      set({ isLoading: true });
      const { data } = await fetchRecipes();
      set({ recipes: await data });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },

  addRecipe: async (newRecipe: IRecipe) => {
    console.log(newRecipe);
    try {
      await addRecipe(newRecipe);
      get().getRecipes();
    } catch (error) {
      console.log(error);
    }
  },

  setCurrentRecipeId: (id: string) =>
    set((state) => {
      return {
        ...state,
        currentRecipeId: id,
      };
    }),

  updatedRecipe: async (id: string | number, updatedRecipe: IRecipe) => {
    try {
      set({
        recipes: get().recipes.map((recipe) =>
          recipe._id === id ? updatedRecipe : recipe
        ),
      });
      await updateRecipe(id as number, updatedRecipe);
    } catch (error) {
      console.log(error);
    }
  },

  deleteRecipe: async (id: string | number) => {
    try {
      set({
        recipes: get().recipes.filter((recipe) => recipe._id !== id),
      });
      await deleteRecipe(id as number);
    } catch (error) {
      console.log(error);
    }
  },

  toggleFavorite: async (id: string | number) => {
    try {
      set({ isTogglingFavorite: true });
      set({
        recipes: get().recipes.map((recipe) => {
          if (recipe._id === id) {
            return {
              ...recipe,
              isFavorite: !recipe.isFavorite,
            };
          }
          return recipe;
        }),
      });
      await toggleFavorite(id as number);
      set({ isTogglingFavorite: false });
    } catch (error) {
      set({ isTogglingFavorite: false });
      console.log(error);
    }
  },

  toggleFavoriteRecipes: (toggle) =>
    set((state) => ({
      ...state,
      isFavoriteRecipesOpen: toggle,
    })),
}));
