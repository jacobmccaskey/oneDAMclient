import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
// import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
// import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
const manBg = require("../img/human-kindness.jpg");

// const oregonTrail = require("../img/mpb.jpeg");

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
      display: "none",
      top: "2rem",
      width: "90%",
      height: "auto",
      right: 0,
      left: 0,
    },
  },
  quoteDiv: {
    // float: "left",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "block",
      marginLeft: "0%",
    },
  },

  impactBody: {
    fontSize: "20px",
    fontWeight: "600",
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
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      marginLeft: theme.spacing(1),
      verticalAlign: "middle",
    },
  },
  motionPicturesContainer: {
    color: "white",
    position: "relative",
    padding: "3rem",
    textAlign: "center",
    marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(1),
    // maxHeight: "8rem",
    backgroundColor: "#111111",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
      padding: theme.spacing(1),
      // marginTop: "10rem",
    },
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
  mainYouTubeVid: {
    maring: "auto",
    width: "80%",
    textAlign: "center",
    margin: "auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto",
      left: 0,
      right: 0,
    },
  },
  quoteBlock: {
    fontFamily: 'Nunito", sans-serif',
    textAlign: "left",
    fontSize: "25px",
  },

  impactSmallViewPortOnly: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },

  mainBlock: {
    textAlign: "center",
    marginTop: "15rem",
    marginRight: "10rem",
    marginBottom: "8rem",
    display: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: 0,
      marginTop: "15rem",
    },
  },

  // oregonTrailBackground: {
  //   position: "fixed",
  //   height: "100vh",
  //   width: "100%",
  //   right: 0,
  //   top: 0,
  //   zIndex: "-1000",
  //   objectFit: "cover",
  //   [theme.breakpoints.down("sm")]: {
  //     objectFit: "cover",
  //   },
  // },
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
            <div className={styles.impactSmallViewPortOnly}>
              <Typography variant="h3" className={styles.mpHeader}>
                <span style={{ color: "#7FDBFF", fontFamily: "one-dam-light" }}>
                  Impact
                </span>
                <span style={{ fontFamily: "one-dam-light" }}>oneDAM</span>
              </Typography>
            </div>
            <Typography className={styles.quoteBlock}>
              <i>
                Do your little bit of good where you are; it's those little bits
                of good put together that overwhelm the world.
              </i>
              <br />
              <br />
              -Desmond Tutu
            </Typography>
            <div>
              <Fade in={true} timeout={1000}>
                <div className={styles.impactBody}>
                  <Typography style={{ fontWeight: "bold" }}>
                    Building the oneDAM brand isn’t about buying our apparel,
                    (of course we are stoked when you do) our goal, however is
                    to project being mindful of our presence here on earth both
                    consumptively and ethically.
                  </Typography>
                  <br />
                  <Typography style={{ fontWeight: "bold" }}>
                    We are all human, it is nearly impossible to LNT (Leave No
                    Trace) but we can ensure we are putting our energy and money
                    towards businesses and communities were people are treated
                    with integrity so we can uplift our communities consciously
                    and intentional.
                  </Typography>
                  <br />
                  <Typography style={{ fontWeight: "bold" }}>
                    With that said :) in our birth year, together we have
                    accomplished so much
                  </Typography>
                  <br />
                  <Typography style={{ fontWeight: "bold" }}>
                    <ul>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Helped 5 people off of the streets, into temporary and
                        permanent housing in Tampa and Houston.
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Helped navigate resumes and job applications for 1
                        individual to find Full-Time employment in Tampa
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Raised $3312 dollars to provide housing for Bobby in
                        Atlantic City and get back on the grid with:
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Birth Certificate{" "}
                        <span role="img" aria-label="emoji">
                          ✅
                        </span>
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        New Jersey State ID{" "}
                        <span role="img" aria-label="emoji">
                          ✅
                        </span>
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        New Bank account{" "}
                        <span role="img" aria-label="emoji">
                          ✅
                        </span>
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Economic Stimulus Check{" "}
                        <span role="img" aria-label="emoji">
                          ✅
                        </span>
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Social Security Direct Deposit{" "}
                        <span role="img" aria-label="emoji">
                          ✅
                        </span>
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Created Phone Plan{" "}
                        <span role="img" aria-label="emoji">
                          ✅
                        </span>
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Food Stamps{" "}
                        <span role="img" aria-label="emoji">
                          ✅
                        </span>
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        working on Medicaid and Long-Term Housing now.
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        used $2,174.63 dollars to handed out over 900 meals in
                        Atlantic City, Tampa, Philadelphia, Wilmington, DE, Fort
                        Lauderdale, Houston, LA, San Francisco and throughout
                        our Lost Across America drive
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Sent a printer, paper and ink cartridges to Dorian’s
                        Caribbean Flat-Patties and a medical clinic in Marsh
                        Harbour and HopeTown in the Bahamas (who have been so
                        devastatingly affected by the September 2019 Hurricane
                        even still)
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Volunteered with Feeding Tampa Bay and Volunteer at a
                        local HS to coach wrestling
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Picked up and removed countless debris from the road and
                        filled up bags of roadside Trash and Recyclables
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Picked up 2 hitchhikers :)
                      </li>
                      <li style={{ marginBottom: "0.5rem" }}>
                        Donated $1,091 money to help Humanitarian efforts within
                        the realm of; Natural Disaster Relief, Covid-19, and
                        Equal/Social Justice Initiatives organizations.
                      </li>
                    </ul>
                  </Typography>
                  <br />
                  <Typography style={{ fontWeight: "bold" }}>
                    Thank you so much, we are humbled to be on this journey with
                    you together we are better.
                  </Typography>
                  <br />
                  <Typography style={{ fontWeight: "bold" }}>
                    “That’s all folks”
                    <br />
                    <br />
                    #oneDAMproject ☝️🚧#giveoneDAM
                    🧑🏿‍🎨👨🏼‍🚀👨🏽‍🔧🧑🏻‍🚒👨🏽‍🏭#theProjectistoproject 🎥
                  </Typography>
                </div>
              </Fade>
            </div>
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
          <div className={styles.mainYouTubeVid}>
            <div className="mainVideoWrapper">
              <iframe
                width="560"
                title="onedam155648"
                height="315"
                src="https://www.youtube.com/embed/08csO40I9vo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* <Button>
            <Typography style={{ fontFamily: "one-dam-light" }}>
              Full Series{" "}
            </Typography>
          </Button> */}
        </div>
      </Fade>
      <Fade in={true} timeout={1000}>
        <div className={styles.cover}>
          <a
            href="https://www.youtube.com/channel/UCEM_TXoGMhBRDEvmWtieTtg/videos"
            style={{ textDecoration: "none" }}
          >
            <Button>
              <Typography
                style={{
                  fontFamily: "one-dam-light",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Full Series{" "}
              </Typography>
            </Button>
          </a>
          <Container maxWidth="lg">
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam15879"
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
                    title="onedam2458"
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
                    title="onedam1478"
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
                    title="onedam2554"
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
                    title="onedam155"
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
                    title="onedam255"
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
                    title="onedam122"
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
                    title="onedam233"
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
                    title="onedam21"
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
                    title="onedam23"
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
            {/*  */}
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam11"
                    height="315"
                    src="https://www.youtube.com/embed/NNLcydK00e0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam22"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/uc4nX3uVVPs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam33"
                    height="315"
                    src="https://www.youtube.com/embed/y0D4yRLmNpo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam44"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/F3rOC6Z9kAg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam55"
                    height="315"
                    src="https://www.youtube.com/embed/08csO40I9vo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam66"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rYDkQgMv7mg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam7"
                    height="315"
                    src="https://www.youtube.com/embed/w_1be7Ds8DU"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam8"
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
            {/*  */}
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam9"
                    height="315"
                    src="https://www.youtube.com/embed/g1owRuCEGk8"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam10"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zwWbrzgRt1w"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    width="560"
                    title="onedam11"
                    height="315"
                    src="https://www.youtube.com/embed/TzpGptIGwQM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.flexItem}>
                <div className="videoWrapper">
                  <iframe
                    title="onedam12"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/LnrMwQ2KV-A"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/*  */}
          </Container>
        </div>
      </Fade>
      {/* </div> */}
    </React.Fragment>
  );
}
