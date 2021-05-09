import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  FormContainer: {
    display: "flex",

    width: "100%",

    padding: 20,

    "@media(max-width: 959px)": {
      boxShadow: "none",
    },
  },

  FormFieldset: {
    display: "block",
    padding: 0,
    margin: 0,
    border: "none",

    "&:disabled": {
      opacity: "0.5",
    },
  },

  FormBody: {
    width: "100%",
  },

  FromFileInput: {
    display: "flex",
    margin: "16px 0 16px 0",

    "& input": {
      display: "inline-block",

      width: "100%",

      padding: "14px",

      border: "1px solid #c4c4c4",
      borderRadius: "4px",

      cursor: "pointer",
      "&:hover": {
        borderColor: "#212121",
      },
    },
  },
}));
