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
    marginBottom: "10rem",
  },
  backgroundImage: {
    position: "fixed",
    top: "5rem",
    height: "auto",
    width: "50%",
    right: 0,
    zIndex: "-1000",
  },
  quoteDiv: {
    float: "left",
    marginLeft: "20%",
  },

  impactBody: {
    marginTop: theme.spacing(3),
    padding: "1rem",
    textAlign: "left",
    marginBottom: theme.spacing(3),
  },
  mpHeader: {
    textAlign: "right",
    color: "white",
  },
  motionPicturesContainer: {
    color: "white",
    position: "relative",
    padding: "2rem",
    marginTop: theme.spacing(3),
    backgroundColor: "#111111",
  },
  cover: {
    width: "100%",
    backgroundColor: "#FFFFFF",
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
}));

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
        <div
          style={{
            textAlign: "center",
            marginTop: "8rem",
            marginRight: "10rem",
            marginBottom: "10rem",
          }}
        >
          <Container maxWidth="sm" className={styles.quoteDiv}>
            <Typography
              style={{
                fontFamily: 'Nunito", sans-serif',
                textAlign: "left",
                fontSize: "25px",
              }}
            >
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
                <br />  Thus far we have invested and donated all $2,174.63 in
                Revenue we have received towards our communities. All we can say
                is thank you so much for the love and support. Join in on the
                fun, by buying made in the USA 100% recycled shirts and do some
                good while tagging if you fancy us :) #oneDAMproject ☝️🚧
                #giveoneDAM 🧑🏿‍🎨👨🏼‍🚀👨🏽‍🔧🧑🏻‍🚒👨🏽‍🏭 #theProjectistoproject 🎥 Home Shop
                Our Blueprint Our Impact 2gether More... back to top Do your
                little bit of good where you are; it's those little bits of good
                put together that overwhelm the world. Desmond Tutu
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
            Pictures
          </Typography>
        </div>
      </Fade>
      <Fade in={true} timeout={1000}>
        <div className={styles.cover}>
          <Container maxWidth="lg">
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <iframe
                  width="560"
                  title="onedam1"
                  height="315"
                  src="https://www.youtube.com/embed/W5OYrwMvwBQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.flexItem}>
                <iframe
                  title="onedam2"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/08csO40I9vo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.flexItem}>
                <iframe
                  width="560"
                  title="onedam1"
                  height="315"
                  src="https://www.youtube.com/embed/LnrMwQ2KV-A"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.flexItem}>
                <iframe
                  title="onedam2"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/g1owRuCEGk8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Container>
        </div>
      </Fade>
    </React.Fragment>
  );
}
