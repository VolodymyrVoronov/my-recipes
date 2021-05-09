import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  MainContentFlexContainer: {
    flexDirection: "column-reverse",

    "@media(min-width: 960px)": {
      flexDirection: "row",
    },
  },
  MainContentFormNoPadding: {
    padding: 0,
  },
}));
