import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
const beachphoto = require("../../img/beachphoto.jpg");
const promoVid = require("../../img/promovid.mp4");
const placeholder = require("../../img/placeholder.png");

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    height: "500px",
    flex: 1,
    float: "right",
    width: "40%",
  },
  main: {
    width: "100%",
    minHeight: "100vh",
  },
  topContainer: {
    display: "flex",
  },
  vidHeaderContainer: {
    width: "60%",
    flex: 1,
    float: "left",
    // backgroundColor: "white",
    verticalAlign: "middle",
    backgroundImage: `url(${beachphoto})`,
    backgroundRepeat: "no-repeat",
  },
  video: {
    width: "100%",
    height: "100%",
    zIndex: "-3",
    opacity: "95%",
  },
  paddingDown: {
    marginTop: "-8%",
    position: "absolute",
    textAlign: "center",
    marginLeft: "15%",
    zIndex: 1,
  },
  headerBackground: {
    height: "40%",
    backgroundColor: "black",
    opacity: "70%",
    marginTop: "20%",
    marginLeft: "10%",
    position: "static",
    width: "110%",
    // zIndex: "-1",
  },
  missionContainer: {
    backgroundColor: "#353839",
    height: "auto",
    width: "100%",
    display: "relative",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  oneDAMText: {
    flexGrow: 1,
    background: "-webkit-linear-gradient(right,pink, blue)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  missionStatement: {
    textAlign: "center",
    padding: "2rem",
  },
  text: {
    color: "#353839",
    textAlign: "left",
  },
  imageHeader: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
}));

export default function Mission() {
  const style = useStyles();
  return (
    <div className={style.main}>
      <Box className={style.topContainer}>
        <div className={style.vidHeaderContainer}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Box
              className={style.headerBackground}
              ref={React.createRef()}
            ></Box>
          </Slide>

          <div className={style.paddingDown}>
            <Fade in>
              <Typography
                variant="h4"
                style={{ fontWeight: 500, color: "white" }}
              >
                Mission
              </Typography>
            </Fade>
            <Slide
              direction="right"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography className={style.oneDAMText}>oneDAM</Typography>
            </Slide>
          </div>
        </div>
        <Fade in={true} timeout={1000}>
          <div ref={React.createRef()} className={style.videoContainer}>
            <video
              autoPlay
              muted
              loop
              id="oneDAM video"
              className={style.video}
              poster={placeholder}
            >
              <source src={promoVid} type="video/mp4" />
            </video>
          </div>
        </Fade>
      </Box>
      <Box className={style.missionContainer}>
        <Container style={{ width: "30%" }}>
          <Paper elevation={3} className={style.missionStatement}>
            <Typography style={{ marginBottom: "1rem", fontSize: "20px" }}>
              Our <span style={{ color: "#E0D19C" }}>Blueprint</span>
            </Typography>
            <Typography className={style.text}>
              oneDAM Project is an eco and etho co.llaboration inspired by the
              human connection and the value in voluntarily going out of one’s
              way to make a difference for one person each and everyday. ​
              <br />
              <br />
              It is true there has never been a time like Now. We as people and
              the world can be connected to any and nearly every person in the
              world instantaneously. ​ This comes with as much privilege as it
              does responsibility. ​ We can't be everywhere at once but we can
              use this portal to create a meaningful difference. A difference
              that outlasts our existence :)
              <br />
              <br />
              Our goal is to create awareness and engagement through our
              communities by inspiring everyone to get out of self and into
              help. ​ We are all volunteers on this planet and the challenge we
              see is one where we must uniquely INVEST in our collective future.
              ​ Our Project is inspired and built on these challenges. ​ ​It is
              our HOPE. That you join us on this JOURNEY and TOGETHER we will
              rewrite our future…
            </Typography>
          </Paper>
        </Container>
      </Box>
    </div>
  );
}
