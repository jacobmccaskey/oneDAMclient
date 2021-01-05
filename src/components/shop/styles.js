import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridbox: {
    marginTop: "10%",
    marginBottom: "5%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "8rem",
      marginBottom: "5rem",
    },
  },
  paper: {
    height: "auto",
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: 160,
      height: "auto",
    },
  },
  media: {
    height: "auto",
    width: "auto",
    paddingTop: "90%",
    objectFit: "contain",
  },

  text: {
    color: "rgb(80, 85, 88)",
    fontWeight: "500",
    fontFamily: "Noto Sans SC",
    fontSize: "18px",
    textAlign: "left",
    marginLeft: theme.spacing(1),
  },
  itemVendor: {
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "one-dam-light",
    textAlign: "left",
    marginLeft: theme.spacing(1),
  },
}));
