import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import NewSubscriber from "./NewSubscriber";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // adjust padding in App.js if changes are made here
    height: "15rem",
    backgroundColor: "rgb(248,248,248)",
    bottom: 0,
    position: "absolute",
    display: "flex",
    textAlign: "center",
  },
  container: {
    position: "relative",
    marginTop: "1rem",
    display: "block",
    textAlign: "center",
    color: "grey",
    flex: "1",
    height: "auto",
  },
  btn: {
    textTransform: "none",
    display: "block",
  },
  btnContainer: {
    textAlign: "left",
    marginLeft: theme.spacing(1),
  },
  subscribeBtn: {
    marginTop: theme.spacing(2),
    textTransform: "none",
  },
}));

export default function Footer() {
  const [subscribe, showSubscribe] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    subscribe === false ? showSubscribe(true) : showSubscribe(false);
  };
  return (
    <Paper className={classes.root}>
      <div className={classes.container}>
        <Typography style={{ fontWeight: "bold", marginTop: "1rem" }}>
          oneDAM Project
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          {/* <Link color="inherit" href="https://onedamproject.co/">
              oneDamProject
            </Link>{" "} */}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <i>created with love. sweat. tears</i>
        <br />
        <Button
          variant="contained"
          size="small"
          className={classes.subscribeBtn}
          onClick={handleClick}
        >
          Subscribe
        </Button>
        <div
          style={
            subscribe === true ? { display: "inherit" } : { display: "none" }
          }
        >
          <NewSubscriber showSubscribe={showSubscribe} />
        </div>
      </div>
    </Paper>
  );
}
