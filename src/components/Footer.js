import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "12rem",
    backgroundColor: "rgb(40,40,40)",
    // display: "block",
    bottom: 0,
    position: "absolute",
  },
  container: {
    position: "relative",
    marginTop: "1rem",
    display: "inline-block",
    textAlign: "center",
    color: "grey",
    width: "33%",
    height: "auto",
    border: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <Typography style={{ fontWeight: "bold" }}>oneDam</Typography>
        <br />
        <a href="./">home</a>
        <br />
        <a href="/shop">shop</a>
        <br />
        <a href="./account">account</a>
        <br />
        <a href="./members">members</a>
        <br />
        <a href="./mission">mission</a>
        <br />
        <a href="./contact">contact us</a>
      </div>
      <div className={classes.container}>
        <Typography style={{ fontWeight: "bold" }}>social</Typography>
        <br />
      </div>
      <div className={classes.container}>
        <Typography style={{ fontWeight: "bold" }}>contribute</Typography>
      </div>
    </footer>
  );
}
