import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import BrickWall from "../../img/brickwall.jpg";
import oneDamLogo from "../../img/onedamlogo.jpg";
import Shop from "../../img/shop.JPG";
import Road from "../../img/road.jpg";
import Blurb from "./Blurb";
import { User } from "../../Context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    marginTop: "1rem",
    // boxShadow:
    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
  gridItemShop: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    color: "white",
    fontFamily: " 'Cinzel', serif",
    fontSize: "30px",
    backgroundImage: `url(${Shop})`,
    loading: "lazy",
    backgroundSize: "500px 400px",
    height: "400px",
    width: "500px",
    filter: "Brightness(70%)",
    "&:hover": {
      filter: "Brightness(99%)",
    },
  },
  gridItemMission: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    color: "white",
    fontFamily: " 'Cinzel', serif",
    fontSize: "30px",
    backgroundImage: `url(${Road})`,
    loading: "lazy",
    backgroundSize: "500px 400px",
    height: "400px",
    width: "500px",
    filter: "Brightness(70%)",
    "&:hover": {
      filter: "Brightness(99%)",
    },
  },
}));

export default function Home() {
  const context = useContext(User);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.background}>
        <img src={oneDamLogo} alt="logo" className={classes.logo} />
      </div>
      <Container className={classes.root}>
        <Link to="./shop" style={{ textDecoration: "none" }}>
          <Button className={classes.gridItemShop} alt="shop products">
            {" "}
            Shop
          </Button>
        </Link>
        <Link to="./mission" style={{ textDecoration: "none" }}>
          <Button alt="oneDams mission" className={classes.gridItemMission}>
            Blueprint
          </Button>
        </Link>
      </Container>
      <Blurb store={context.store} deviceType={context.deviceType} />
    </div>
  );
}
