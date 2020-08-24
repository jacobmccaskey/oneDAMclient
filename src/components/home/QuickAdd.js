import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  image: {
    height: "300px",
    width: "300px",
    margin: "0px",
  },
  cardInfo: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "5px",
  },
}));

export default function QuickAdd(props) {
  const classes = useStyles();
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "1rem" }}>
      <AliceCarousel
        responsive={responsive}
        autoPlayInterval={4000}
        autoPlay={props.deviceType === "mobile" ? false : true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
        stagePadding={0}
      >
        {props.store.map((item) => (
          <Card>
            <CardMedia title={item.name}>
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
    </Container>
  );
}

QuickAdd.propTypes = {
  store: PropTypes.array.isRequired,
  DeviceType: PropTypes.string,
};
