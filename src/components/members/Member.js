import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
const MattHeadShot = require("../../img/mattisgay.jpg");
const useStyles = makeStyles((theme) => ({
  header: {
    // textDecoration: "underline",
    marginTop: theme.spacing(1),
  },
  flexBox: {
    display: "flex",
    marginTop: "2rem",
  },
  innerDivFlex: {
    flex: 1,
  },
  headShot: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10%",
  },
  bioContainer: {
    width: "50%",
    marginTop: theme.spacing(1),
  },
}));

export default function Member() {
  const style = useStyles();
  return (
    <div>
      <Box className={style.header}>
        <Typography variant="h4">Members</Typography>
      </Box>
      <Box className={style.flexBox}>
        <Container className={style.innerDivFlex}>
          <img
            src={MattHeadShot}
            className={style.headShot}
            alt="Matt Jost headshot"
          />

          <Typography variant="h5">Matt Jost</Typography>
          <Typography style={{ color: "grey", textTransform: "capitalize" }}>
            Servant
          </Typography>
          <div className={style.divContainer}>
            <Typography>INSERT BIO HERE</Typography>
          </div>
        </Container>
        <Container className={style.innerDivFlex}>
          <img
            src={MattHeadShot}
            alt="jake mccaskey headshot"
            className={style.headShot}
          />

          <Typography variant="h5">Jake McCaskey</Typography>
          <Typography style={{ color: "grey", textTransform: "capitalize" }}>
            Programmer
          </Typography>
          <div className={style.divContainer}>
            <Typography>INSERT BIO HERE</Typography>
          </div>
        </Container>
      </Box>
    </div>
  );
}
