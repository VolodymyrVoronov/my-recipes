import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  RecipeHeader: {
    display: "flex",
    flexDirection: "column",

    "@media(min-width: 425px)": {
      flexDirection: "row",

      marginRight: 16,
    },

    // "& .MuiCardHeader-avatar": {
    //   marginRight: 0,
    //   marginBottom: 10,

    //   "@media(min-width: 425px)": {
    //     marginRight: 16,
    //     marginBottom: 0,
    //   },
    // },

    "& .MuiCardHeader-action": {
      alignSelf: "center",
      margin: "0 auto",
      marginTop: 10,

      "@media(min-width: 425px)": {
        marginTop: "-8px",
        marginRight: "-8px",
      },
    },
  },

  RecipeFavoriteButton: {
    color: "#000000",
  },

  RecipeDeleteButton: {
    color: "#000000",

    "&:hover": {
      color: "#dc004e",
    },
  },

  RecipeEditButton: {
    color: "#000000",

    "&:hover": {
      color: "#1976d2",
    },
  },

  RecipeFavoriteButtonActive: {
    color: "#e54033",
  },

  VeganIcon: {
    width: 25,
    height: 25,

    "@media(min-width: 960px)": {
      width: 35,
      height: 35,
    },
  },

  RecipePhoto: {
    display: "flex",

    height: 0,
    paddingTop: "50%",
  },
}));
