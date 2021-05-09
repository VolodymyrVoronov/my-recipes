import React from "react";

import { useStore } from "./../../store/recipes";

import { Container } from "@material-ui/core";

import Header from "./../Header/Header";
import MainContent from "../MainContent/MainContent";
import FavoriteRecipes from "./../FavoriteRecipes/FavoriteRecipes";

const App = (): React.ReactElement => {
  const { getRecipes }: { getRecipes: () => void } = useStore();

  React.useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header />
      <MainContent />
      <FavoriteRecipes />
    </Container>
  );
};

export default App;
