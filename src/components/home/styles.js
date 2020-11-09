import { makeStyles } from "@material-ui/core/styles";
import BrickWall from "../../img/brickwall.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    // boxShadow:
    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  background: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundImage: `url(${BrickWall})`,
    filter: "Brightness(80%)",
    loading: "lazy",
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    width: "100%",
    height: "auto",
    paddingTop: "3%",
    paddingBottom: "2%",
  },
  logo: {
    borderRadius: "0.5rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  gridItem: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    color: "white",
    textAlign: "center",
    fontFamily: " 'Cinzel', serif",
    fontSize: "30px",
    loading: "lazy",

    width: "100%",
    display: "relative",
    height: "400px",
    filter: "Brightness(70%)",
    transition: "1s",
    "&:hover": {
      filter: "Brightness(99%)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  flex: {
    flex: 1,
  },
  blurbContainer: {
    width: "100%",
    backgroundColor: "rgb(48,48,48)",
    borderRadius: "0 0 0 0",
    height: "auto",
    transition: "2s",
    "&:hover": {
      backgroundColor: "beige",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  gridText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: " 'Cinzel', serif",
    fontSize: "30px",
  },
}));
