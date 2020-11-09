import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
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
    display: "inline-block",
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
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.container}>
        <div className={classes.btnContainer}>
          <Button to="./" className={classes.btn}>
            home
          </Button>

          <Button to="/shop" className={classes.btn}>
            shop
          </Button>
          <Button to="./account" className={classes.btn}>
            account
          </Button>
          <Button to="./members" className={classes.btn}>
            members
          </Button>

          <Button to="./mission" className={classes.btn}>
            mission
          </Button>
          <Button to="./contact" className={classes.btn}>
            contact us
          </Button>
        </div>
      </div>
      <div className={classes.container}>
        <Typography style={{ fontWeight: "bold", marginTop: "1rem" }}>
          oneDAM Project
        </Typography>
        <Typography>est 2020</Typography>
        <Typography>
          <i>created with love. sweat. tears</i>
        </Typography>
        <br />
      </div>
      <div className={classes.container}>
        <Typography style={{ fontWeight: "bold" }}>contribute</Typography>
      </div>
    </Paper>
  );
}
