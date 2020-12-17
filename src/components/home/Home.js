import React, { useContext } from "react";
import ItemCarousel from "./ItemCarousel";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import brickBg from "../../img/brick-bg.jpg";
import Button from "@material-ui/core/Button";
import oneDamLogo from "../../img/onedamlogo.png";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { User } from "../../Context";
import { Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
  },
  header: {
    fontFamily: "one-dam-bold",
    marginBottom: "1rem",
    marginLeft: "1rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
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
    marginTop: "5rem",
    marginBottom: "2rem",
  },

  searchBar: {
    textAlign: "center",
  },
  logo: {
    borderRadius: "4px 0px 0px 4px",
    width: "100%",
    height: "100%",
    marginBottom: "2rem",
  },
  logoWrap: {
    margin: "auto",
    maxWidth: "55%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
  paper: {
    fontFamily: "one-dam-bold",
    fontSize: "25px",
    margin: "auto",
    padding: "1rem",
    textAlign: "left",
    maxWidth: "80%",
    [theme.breakpoints.down]: {
      width: "100%",
      fontSize: "20px",
    },
  },

  paperDiv: {
    paddingBottom: "2rem",
    paddingTop: "2rem",
    width: "100%",
    backgroundColor: "rgb(243, 242, 220)",
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
      paddingBottom: "8rem",
    },
  },

  blurb: {
    // backgroundColor: "rgb(243, 242, 220)",
    backgroundColor: "black",
    color: "white",
    fontFamily: "one-dam-bold",
    fontSize: "20px",
    padding: "8rem",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "2rem",
      fontSize: "18px",
    },
  },

  blurbContainer: {
    width: "60%",
    fontSize: "20px",
    textAlign: "center",
    margin: "auto",
    fontFamily: "one-dam-light",
    // fontFamily: "Noto Sans SC",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      textAlign: "left",
    },
  },
  shopBtn: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgb(49, 48, 44)",
    color: "rgb(243, 242, 220)",
    textTransfrom: "none",
    width: "50%",
    transition: "1s",
    "&:hover": {
      color: "rgb(49, 48, 44)",
      backgroundColor: "rgb(248,248,248)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  icon: {
    height: "30px",
    width: "auto",
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  // const [input, setInput] = useState("");
  const context = useContext(User);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={brickBg} className={classes.backgroundImage} alt="brick wall" />
      <div className={classes.searchBarWrap}>
        {/* <div className={classes.searchBar}>
          <TextField
            label="search products"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            variant="outlined"
            color="primary"
            style={{ backgroundColor: "white", width: "30%" }}
          />
        </div> */}
      </div>
      <Typography variant="h3" className={classes.header}>
        one decision amongst many
      </Typography>
      <Fade in timeout={1000}>
        <Container>
          <Box className={classes.logoWrap}>
            <img src={oneDamLogo} alt="oneDAM logo" className={classes.logo} />
          </Box>
        </Container>
      </Fade>
      <Paper elevation={3} className={classes.paperDiv}>
        <Typography className={classes.paper}>
          Environmentally and Ethically US based apparel co.llaborative designed
          to connect words and ideas to people and a greater good.
        </Typography>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <Button className={classes.shopBtn}>
            <Typography
              style={{ fontFamily: "one-dam-bold", fontSize: "25px" }}
            >
              view collection
            </Typography>
          </Button>
        </Link>
      </Paper>

      <div style={{ marginTop: "2rem" }}>
        <div style={{ width: "100%", marginBottom: "5rem" }}>
          <ItemCarousel items={context.store} />
        </div>
        <Paper
          className={classes.blurb}
          elevation={3}
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
            us on Facebook/Instagram or directly at{" "}
            <a
              style={{ textDecoration: "none" }}
              href="mailto:Matthew@oneDAMproject.co"
            >
              Matthew@oneDAMproject.co
            </a>
          </Typography>
          <div style={{ margin: "auto" }}>
            <InstagramIcon className={classes.icon} />
            <FacebookIcon className={classes.icon} />
            <YouTubeIcon className={classes.icon} />
          </div>
        </Paper>
      </div>
    </div>
  );
}
