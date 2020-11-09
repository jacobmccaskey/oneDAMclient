import React, { useContext } from "react";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Shop from "../../img/shop.JPG";
import Road from "../../img/road.jpg";
import Button from "@material-ui/core/Button";
import oneDamLogo from "../../img/onedamlogo.jpg";
import Blurb from "./Blurb";
import Paper from "@material-ui/core/Paper";
import { User } from "../../Context";
import { Typography } from "@material-ui/core";

export default function Home() {
  const context = useContext(User);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.background}>
        <Link to="/">
          <img src={oneDamLogo} alt="logo" className={classes.logo} />
        </Link>
      </div>
      <div className={classes.root}>
        <div className={classes.flex}>
          <Link to="./shop" style={{ textDecoration: "none" }}>
            <div className={classes.gridItem} alt="shop products">
              <img src={Shop} alt="shop page" className={classes.img}></img>
              <Typography className={classes.gridText}>Shop</Typography>
            </div>
          </Link>
        </div>
        <div className={classes.flex}>
          <Link to="./mission" style={{ textDecoration: "none" }}>
            <div alt="oneDams mission" className={classes.gridItem}>
              <img src={Road} alt="mission" className={classes.img} />
              <Typography className={classes.gridText}> Mission</Typography>
            </div>
          </Link>
        </div>
      </div>
      <Paper className={classes.blurbContainer}>
        <Blurb store={context.store} deviceType={context.deviceType} />
      </Paper>
    </div>
  );
}
