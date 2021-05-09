import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  Header: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",

    margin: "15px 0",
    padding: "15px 0",

    borderRadius: "5px",
  },

  HeaderTitle: {
    display: "flex",
    alignItems: "center",

    fontFamily: "Cinzel Decorative",
    fontSize: 26,
    lineHeight: "30px",

    "@media(min-width: 425px)": {
      fontSize: 40,
      lineHeight: "44px",
    },
  },

  HeaderIcon: {
    display: "flex",

    marginRight: 15,

    width: 36,
    height: 36,

    "@media(min-width: 425px)": {
      width: 56,
      height: 56,
    },
  },

  HeaderFavoriteButton: {
    display: "flex",

    marginLeft: 15,

    width: 36,
    height: 36,

    color: "#e54033",

    "@media(min-width: 425px)": {
      width: 56,
      height: 56,
    },
  },

  HeaderFavoriteButtonIcon: {
    display: "flex",

    fontSize: 20,

    "@media(min-width: 425px)": {
      fontSize: 40,
    },
  },
}));
