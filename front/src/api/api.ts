import axios from "axios";

interface IRecipe {
  recipeName: string;
  description: string;
  tags: string;
  photoOfTheRecipe: string;
  vegan: boolean;
  isFavorite: boolean;
}

const URL = `http://localhost:5000/recipes`;

const instanceAPI = axios.create({
  baseURL: URL,
});

const fetchRecipes = () => instanceAPI.get(URL);
const addRecipe = (newRecipe: IRecipe) => instanceAPI.post(URL, newRecipe);
const updateRecipe = (id: number, updatedRecipe: IRecipe) =>
  instanceAPI.patch(`${URL}/${id}`, updatedRecipe);
const deleteRecipe = (id: number) => instanceAPI.delete(`${URL}/${id}`);
const toggleFavorite = (id: number) =>
  instanceAPI.patch(`${URL}/${id}/toggleFavorite`);

export { fetchRecipes, addRecipe, updateRecipe, deleteRecipe, toggleFavorite };
