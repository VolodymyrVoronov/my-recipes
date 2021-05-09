import React from "react";
import { useStore, IRecipe } from "./../../store/recipes";
// @ts-ignore
import { useWindowSize } from "@withvoid/melting-pot";

import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";
import NoRecipes from "./../NoRecipes/NoRecipes";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Grow,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./MainContentStyles";

const MainContent = (): React.ReactElement => {
  const classes = useStyles();

  const {
    isLoading,
    recipes,
  }: { isLoading: boolean; recipes: IRecipe[] } = useStore();

  const { width } = useWindowSize();

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={5}
          className={classes.MainContentFlexContainer}
        >
          <Grid item xs={12} md={7} lg={8}>
            {isLoading ? (
              <Grid container justify="center">
                <CircularProgress />
              </Grid>
            ) : (
              <>{recipes.length !== 0 ? <Recipes /> : <NoRecipes />}</>
            )}
          </Grid>

          <Grid item xs={12} md={5} lg={4} style={{ paddingBottom: 0 }}>
            {width > 959 ? (
              <Form />
            ) : (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Add new recipe</Typography>
                </AccordionSummary>
                <AccordionDetails
                  className={
                    width < 959 ? classes.MainContentFormNoPadding : ``
                  }
                >
                  <Form />
                </AccordionDetails>
              </Accordion>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default MainContent;
