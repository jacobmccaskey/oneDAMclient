import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
      </div>
      <div className={classes.container}>
        <Typography style={{ fontWeight: "bold" }}>contribute</Typography>
        <Button className={classes.btn}>
          <Typography>Donate</Typography>
        </Button>
        <Button className={classes.btn}>
          <Typography>Subscribe</Typography>
        </Button>
        <Button className={classes.btn}>
          <Typography>Become a partner</Typography>
        </Button>
      </div>
    </Paper>
  );
}
