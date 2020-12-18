import { makeStyles } from "@material-ui/core/styles";
// import drawerBg from "../../img/drawerbg.jpg";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: "fixed",
    top: 0,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontSize: "40px",
    fontFamily: "triline",
  },
  navbar: {
    backgroundColor: "rgb(152, 118, 84)",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    fontFamily: "one-dam-light",
    color: "grey",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(40,40,40)",
    loading: "lazy",
    // filter: "brightness(20%)",
    textDecoration: "none",
    fontFamily: "one-dam-light",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    backgroundColor: "black",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  iconText: {
    color: "grey",
    textDecoration: "none",
    fontFamily: "one-dam-light",
    fontSize: "22px",
  },
  navIcon: {
    color: "black",
  },
  btn: {
    textDecoration: "none",
    color: "black",
  },
  navMissingInfoBtn: {
    textTransform: "none",
    color: "black",
    background: "-webkit-linear-gradient(right,pink, blue)",
    marginRight: theme.spacing(1),
  },

  drawerBg: {
    // backgroundColor: "rgb(40, 40, 40)",
    backgroundColor: "black",

    color: "black",
    width: "100%",
    height: "100%",
    fontFamily: "one-dam-light",
  },
}));
