import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(4),
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: theme.spacing(2),
    },
  },
  paperLeft: {
    flex: 1,
    margin: theme.spacing(1),
  },
  paperRight: {
    flex: 2,
    margin: theme.spacing(1),
  },
  accountSettingsDiv: {
    textAlign: "left",
  },
  menuBtn: {
    display: "block",
  },
  smallHeader: {
    textDecoration: "underline",
  },
  inputReadOnly: {
    backgroundColor: "white",
    margin: theme.spacing(1),
    borderRadius: "2px",
  },
  inputCanEdit: {
    backgroundColor: "rgb(224,224,224)",
  },
  contactDiv: {
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
