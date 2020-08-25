import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";
import "react-alice-carousel/lib/alice-carousel.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "360px",
    width: "360px",
    display: "inline-block",
  },
  container: {
    textAlign: "center",
  },
  div: {
    display: "inline-block",
    width: "100%",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  image: {
    height: "auto",
    width: "100%",
    margin: "0px",
  },
  cardInfo: {
    position: "absolute",
    top: "10px",
    left: "10px",
    margin: "5px",
  },
  headerText: {
    fontWeight: "bold",
    background: "-webkit-linear-gradient(right,pink, blue)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

export default function Blurb(props) {
  const classes = useStyles();
  // const responsive = {
  //   0: { items: 1 },
  //   1024: { items: 3 },
  // };

  return (
    <div className={classes.div}>
      {/* <Container maxWidth="md" style={{ marginTop: "1rem" }}>
      <AliceCarousel
          responsive={responsive}
          autoPlayInterval={4000}
          autoPlay={props.deviceType === "mobile" ? false : true}
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}
          stagePadding={3}
        >
          {props.store.map((item) => (
            <Card key={item._id}>
              <CardMedia title={item.name} className={classes.root}>
                <Image
                  src={item.imageUrl}
                  className={classes.image}
                  alt={item.name}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {item.name}
                  <br />${item.price}
                </Typography>
                <br />
                <Button size="small" color="primary">
                  add to cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </AliceCarousel>
      </Container> */}
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.headerText}>
          What is oneDam
        </Typography>
        <Typography>
          <span style={{ color: "gray", fontWeight: "bold" }}>
            ONE DECISION AMONGST MANY
          </span>
          <br />
          Environmentally and Ethically US based apparel{" "}
          <span style={{ color: "purple" }}>co.llaborative</span> designed to
          connect words and ideas to people and a greater good that will outlast
          our existence.
          <br />
          <span style={{ fontWeight: "bold", color: "purple" }}>
            oneDam
          </span>{" "}
          has two meanings, we fancy that the world we see provokes duality :) ​
          one Decision Amongst Many - provoke people to become more
          conscientious and proactive with our product purchases. Taking into
          consideration ethical and environmental approach to ensure people and
          the earth are treated respectfully one Day a Month - inspire everyone
          to donate oneDay or oneDAYPAY to a cause that inspires you every
          month. get creative and find a way to uplift your commUNITY. ​
        </Typography>
      </Container>
    </div>
  );
}
