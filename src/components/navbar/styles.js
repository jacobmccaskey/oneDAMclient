import { makeStyles } from "@material-ui/core/styles";
// import drawerBg from "../../img/drawerbg.jpg";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    background: "-webkit-linear-gradient(right,pink, blue)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navbar: {
    backgroundColor: "rgb(40,40,40)",
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
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(40,40,40)",
    // backgroundImage: `url(${drawerBg})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    loading: "lazy",
    // filter: "brightness(20%)",
    textDecoration: "none",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
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
    color: "white",
    textDecoration: "none",
  },
  navIcon: {
    color: "grey",
  },
  btn: {
    textDecoration: "none",
  },
  navMissingInfoBtn: {
    textTransform: "none",
    color: "black",
    background: "-webkit-linear-gradient(right,pink, blue)",
    marginRight: theme.spacing(1),
  },
}));
