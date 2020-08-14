import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridbox: {
    marginTop: "10%",
  },
  paper: {
    height: 400,
    width: 300,
  },
  media: {
    height: "auto",
    width: "auto",
    paddingTop: "90%",
    objectFit: "contain",
  },
}));
