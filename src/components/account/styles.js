import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // margin: theme.spacing(4),
    marginTop: "10rem",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "block",
      // margin: theme.spacing(1),
      marginTop: "3.5rem",
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
    backgroundColor: "#F5F5F5",
    margin: theme.spacing(1),
    borderRadius: "2px",
    border: theme.shadows,
  },
  inputCanEdit: {
    backgroundColor: "white",
    margin: theme.spacing(1),
    borderRadius: "2px",
  },
  contactDiv: {
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  accountBtn: {
    textTransform: "none",
    backgroundColor: "#0063cc",
    fontSize: 16,
    color: "white",
    padding: "6px 12px",
    margin: theme.spacing(1),
    "&:hover": {
      color: "black",
      backgroundColor: "grey",
    },
  },
  logoutBtn: {
    backgroundColor: "red",
    color: "white",
    fontSize: 16,
    padding: "6px 12px",
    margin: theme.spacing(1),
    "&:hover": {
      color: "black",
    },
  },
  emptyOrderPage: {
    textAlign: "center",
    verticalAlign: "center",
    height: "30rem",
  },
  emptyOrderTxt: {
    paddingTop: "5rem",
  },
  favContainer: {
    display: "flex",
  },
  favImg: {
    flex: 1,
    "& img": {
      height: "150px",
      width: "auto",
      transition: "0.3s",
      "&:hover": {
        height: "180px",
        width: "auto",
      },
    },
  },
  favDetails: {
    flex: 3,
  },
  favViewBtn: {
    textTransform: "none",
    backgroundColor: "#8FBC8B",
    color: "black",
    marginRight: "1rem",
  },
  deleteFavBtn: {
    backgroundColor: "#7CB9E8",
    color: "white",
  },
  favoritesViewport: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // minHeight: "35rem",
    },
    [theme.breakpoints.down("md")]: {
      // minHeight: "35rem",
    },
  },

  loginBtn: {
    display: "block",
    fontSize: "20px",
    // marginBottom: theme.spacing(1),
    width: "50%",
    margin: "auto",
  },
  ordersWrap: {
    textAlign: "left",
  },
  paperOrder: {
    margin: theme.spacing(1),
  },
  orderText: {
    marginLeft: theme.spacing(1),
    fontWeight: "600",
  },
}));
