import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
const blueBg = require("../../img/blue-bg.jpg");
const mattHeadshot = require("../../img/mattheadshot.jpg");

const useStyles = makeStyles((theme) => ({
  topImg: {
    // postion: "static",
    zIndex: "-1000",
    width: "100%",
    height: "auto",
  },
  header: {
    position: "absolute",
    top: "300px",
    left: 0,
    right: 0,
    [theme.breakpoints.between("sm", "md")]: {
      top: "150px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "50px",
    },
    // zIndex: "1000",
  },
  gridContainer: {
    display: "flex",
    margin: "auto",
    maxWidth: "1000px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "block",
    },
  },
  grid: {
    flex: 1,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  picture: {
    borderRadius: "20px",
    width: "100%",
    height: "100%",
  },

  pictureWrap: {
    width: "80%",
    height: "auto",
  },
  //   quoteDiv: {
  //     width: "500px",
  //     margin: "auto",
  //     fontSize: "25px",
  //     color: "white",
  //     fontWeight: "500",
  //   },
  //   outerQuoteWrapper: {
  //     marginTop: "-10rem",
  //   },
}));

export default function Blueprint() {
  const styles = useStyles();
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Typography variant="h1" style={{ fontFamily: "one-dam-bold" }}>
          Blue<span style={{ color: "#1A4C80" }}>print</span>
        </Typography>
      </div>
      <div>
        <img src={blueBg} alt="ocean background" className={styles.topImg} />
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <Typography
            className="one-dam-body"
            style={{ textAlign: "left", fontSize: "18px" }}
          >
            <span style={{ fontWeight: "600" }}>oneDAM Project</span> is an eco
            and etho co.llaboration inspired by the human connection and the
            value in voluntarily going out of one’s way to make a difference for
            one person each and everyday. ​
            <br />
            <br />
            It is true there has never been a time like Now. We as people and
            the world can be connected to any and nearly every person in the
            world instantaneously. ​
            <br />
            <br />
            This comes with as much privilege as it does responsibility. ​ We
            can't be everywhere at once but we can use this portal to create a
            meaningful difference. A difference that outlasts our existence :)
          </Typography>
        </div>
        <div className={styles.grid}>
          <Typography
            className="one-dam-body"
            style={{ textAlign: "left", fontSize: "18px" }}
          >
            Our goal is to create awareness and engagement through our
            communities by inspiring everyone to get out of self and into help.
            <br />
            <br />
            ​ We are all volunteers on this planet and the challenge we see is
            one where we must uniquely INVEST in our collective future. ​
            <br />
            <br />
            Our Project is inspired and built on these challenges. ​ ​It is our
            HOPE. That you join us on this JOURNEY and TOGETHER we will rewrite
            our future…
          </Typography>
        </div>
        <div style={{ margin: "3rem" }} />
      </div>
      <Container
        maxWidth="sm"
        style={{ display: "block", marginTop: "2rem", marginBottom: "1rem" }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div className={styles.pictureWrap}>
              <img
                src={mattHeadshot}
                alt="headshot"
                className={styles.picture}
              />
            </div>
            <Typography
              className="one-dam-light"
              style={{
                float: "left",
                marginLeft: "0.5rem",
                fontSize: "20px",
                fontFamily: "one-dam-light",
              }}
            >
              Matthew Jost
              <br />
              <span style={{ color: "grey" }}>Servant</span>
            </Typography>
          </div>
          <div style={{ flex: 2, borderLeft: "1px solid grey" }}>
            <Typography style={{ textAlign: "left", paddingLeft: "1rem" }}>
              Matt is a kind man who since childhood wanted to make a positive
              difference in the world. He has spent his life traveling the world
              working and playing in various industries as a: Financial Advisor,
              Wilderness Therapy-Field Instructor, Barista, Caretaker,
              Landscaper, Lyft Driver and more things he supposes. ​ He has
              volunteered with many organizations: All Hands and Hearts, Oregon
              Adaptive Sports, Junior Achievement, Global Glimpse, Habitat for
              Humanity, Project Open Hand, Glide, and Trinity Cafe. He also
              serves as a volunteer wrestling coach and more or less implements
              Random acts of Love into his everyday of life.
            </Typography>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
