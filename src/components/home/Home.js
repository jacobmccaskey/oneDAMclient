import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import brickBg from "../../img/brick-bg.jpg";
import Button from "@material-ui/core/Button";
import oneDamLogo from "../../img/onedamlogo.jpg";
import Blurb from "./Blurb";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { User } from "../../Context";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
  },
  backgroundImage: {
    position: "fixed",
    height: "100vh",
    width: "100%",
    right: 0,
    top: 0,
    zIndex: "-1000",
  },
  searchBarWrap: {
    marginTop: "6rem",
    marginBottom: "2rem",
  },

  searchBar: {
    textAlign: "center",
  },
  logo: {
    borderRadius: "4px",
    width: "100%",
    height: "100%",
  },
  logoWrap: {
    margin: "auto",
    maxWidth: "50%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
  paper: {
    backgroundColor: "rgb(243, 242, 220)",
    fontFamily: "one-dam-light",
    fontSize: "25px",
    margin: "auto",
    padding: "1rem",
    textAlign: "left",
    width: "400px",
  },

  blurb: {
    backgroundColor: "rgb(243, 242, 220)",
    fontFamily: "one-dam-bold",
    fontSize: "20px",
    padding: "1rem",
  },
  blurbContainer: {
    width: "60%",
    fontSize: "25px",
    textAlign: "center",
    margin: "auto",
    fontFamily: "one-dam-light",
  },
  shopBtn: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgb(49, 48, 44)",
    color: "rgb(243, 242, 220)",
    textTransfrom: "none",
  },
}));

export default function Home() {
  const [input, setInput] = useState("");
  const context = useContext(User);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={brickBg} className={classes.backgroundImage} alt="brick wall" />
      <div className={classes.searchBarWrap}>
        <div className={classes.searchBar}>
          <TextField
            label="search products"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            variant="outlined"
            color="primary"
            style={{ backgroundColor: "white", width: "30%" }}
          />
        </div>
      </div>
      <Fade in timeout={1000}>
        <Container>
          <Box m={2} className={classes.logoWrap}>
            <img src={oneDamLogo} alt="oneDAM logo" className={classes.logo} />
            <Typography
              variant="h3"
              style={{ fontFamily: "one-dam-bold", marginBottom: "1rem" }}
            >
              one decision amongst many
            </Typography>
          </Box>
          <Paper elevation={3} className={classes.paper}>
            Environmentally and Ethically US based apparel co.llaborative
            designed to connect; words and ideas to people and a greater good.
          </Paper>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <Button className={classes.shopBtn}>
              <Typography
                style={{ fontFamily: "one-dam-bold", fontSize: "25px" }}
              >
                view collection
              </Typography>
            </Button>
          </Link>
        </Container>
      </Fade>
      <div style={{ marginTop: "2rem" }}>
        <Paper
          className={classes.blurb}
          elevation={2}
          style={{ borderRadius: "0px" }}
        >
          <Typography className={classes.blurbContainer}>
            Thank you for coming to our site. If you are reading this you are in
            the right place and we are happy you found us. oneDAM is about
            inspiring people to be more conscientious with our purchases while
            also provoking people to get involved in their community and bring
            us along. ​ Our shirts are made in the USA out of recycled material
            and we use proceeds to find unique ways to connect and uplift
            people. Take a time check out our Blueprint and the Motion Pictures
            to see some of the work we have done. Don't hesitate to reach out to
            us on Facebook/Instagram or directly at Matthew@oneDAMproject.co
          </Typography>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <Button>
              <Typography
                style={{ fontFamily: "one-dam-bold", fontSize: "25px" }}
              >
                Donate
              </Typography>
            </Button>
          </Link>
        </Paper>
      </div>
    </div>
  );
}
