import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
// import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
const manBg = require("../img/human-kindness.jpg");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  backgroundImage: {
    position: "fixed",
    top: "5rem",
    height: "auto",
    width: "50%",
    right: 0,
    zIndex: "-1000",
    [theme.breakpoints.down("sm")]: {
      top: "2rem",
      width: "90%",
      height: "auto",
      right: 0,
      left: 0,
    },
  },
  quoteDiv: {
    float: "left",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "block",
      marginLeft: "0%",
    },
  },

  impactBody: {
    marginTop: theme.spacing(3),
    padding: "1rem",
    textAlign: "left",
    // marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      // paddingDown: "30rem",
      // width: "100%",
    },
  },
  mpHeader: {
    textAlign: "right",
    color: "white",
  },
  motionPicturesContainer: {
    color: "white",
    position: "relative",
    padding: "5rem",
    marginTop: theme.spacing(3),
    maxHeight: "6rem",
    backgroundColor: "#111111",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
      marginTop: "25rem",
    },
    // width: "100%",
  },
  cover: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    position: "relative",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  flexContainer: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },

  flexItem: {
    flex: 1,
    margin: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },

  quoteBlock: {
    fontFamily: 'Nunito", sans-serif',
    textAlign: "left",
    fontSize: "25px",
  },

  mainBlock: {
    textAlign: "center",
    marginTop: "8rem",
    marginRight: "10rem",
    marginBottom: "8rem",
    display: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: 0,
      marginTop: "15rem",
    },
  },
}));

// const urlList = [
//   "https://www.youtube.com/embed/waNb7__yL_M",
//   "https://www.youtube.com/embed/mVPxzwF97b8",
// ];

// function YouTubeVideo(props) {
//   const { url } = props;
//   const styles = useStyles();

//   return (
//     <React.Fragment>
//       <div className={styles.flexItem}>
//         <div className="videoWrapper">
//           <iframe
//             width="560"
//             title={`${url}`}
//             height="315"
//             src={`${url}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

export default function Impact() {
  const styles = useStyles();
  return (
    <React.Fragment>
      <div className={styles.root}>
        <Fade in={true} timeout={1000}>
          <img
            src={manBg}
            alt="background of beach"
            className={styles.backgroundImage}
          />
        </Fade>
        <div className={styles.mainBlock}>
          <Container maxWidth="sm" className={styles.quoteDiv}>
            <Typography className={styles.quoteBlock}>
              <i>
                Do your little bit of good where you are; it's those little bits
                of good put together that overwhelm the world.
              </i>
              <br />
              <br />
              -Desmond Tutu
            </Typography>
            <Paper>
              <Typography className={styles.impactBody}>
                Since the 1st of 2020, as a result of your support and love we
                have been to able to accomplish so much… * Help 5 people off of
                the streets and into shelters/permanent housing 3 of which we
                helped get jobs in Tampa and Houston
                <br />
                <br />
                * Made and handed out over 600 meals through 'oneDAM meal' in
                Atlantic City, Tampa, Philadelphia, Wilmington, Delaware,
                Houston, LA and San Francisco
                <br />
                <br />
                ​ * Raised $3312 dollars to provide housing for Bobby ​
                <br />
                <br />
                * Volunteered with Feeding Tampa Bay, HOPE Inc, coached
                Wrestling at Plant High in Tampa
                <br />
                <br />
                * Raised money to help Humanitarian efforts within the realm of;
                Natural Disaster Relief, Covid-19, and Equal/Social Justice
                Initiatives.
                <br />
                <br />
                Thus far we have invested and donated all $2,174.63 in Revenue
                we have received towards our communities. All we can say is
                thank you so much for the love and support. Join in on the fun,
                by buying made in the USA 100% recycled shirts and do some good
                while tagging if you fancy us :) #oneDAMproject ☝️🚧 #giveoneDAM
                🧑🏿‍🎨👨🏼‍🚀👨🏽‍🔧🧑🏻‍🚒👨🏽‍🏭 #theProjectistoproject 🎥 Do your little bit of
                good where you are; it's those little bits of good put together
                that overwhelm the world. -Desmond Tutu
              </Typography>
            </Paper>
          </Container>
        </div>
      </div>
      <Fade in={true} timeout={1000}>
        <div className={styles.motionPicturesContainer}>
          <Typography variant="h2" className={styles.mpHeader}>
            <span style={{ color: "#7FDBFF", fontFamily: "one-dam-light" }}>
              Motion
            </span>
            <span style={{ fontFamily: "one-dam-light" }}>Pictures</span>
          </Typography>
        </div>
      </Fade>
      <Fade in={true} timeout={1000}>
        <div className={styles.cover}>
          <Container maxWidth="lg">
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam1"
                    height="315"
                    src="https://www.youtube.com/embed/waNb7__yL_M"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam2"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/mVPxzwF97b8"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam1"
                    height="315"
                    src="https://www.youtube.com/embed/91IDtkZZQV0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam2"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Xf7mbkB9q5E"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam1"
                    height="315"
                    src="https://www.youtube.com/embed/J6igEZbN9IM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam2"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dS42Nqfvoos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam1"
                    height="315"
                    src="https://www.youtube.com/embed/4O7_GlXq7SY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam2"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/uc8z8z45qIo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam1"
                    height="315"
                    src="https://www.youtube.com/embed/hFJ1kvlOCPc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam2"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/MZRpirYxW2Y"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Fade>
      {/* </div> */}
    </React.Fragment>
  );
}
