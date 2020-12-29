import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

import "pure-react-carousel/dist/react-carousel.es.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    height: "auto",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },

  // paper: {
  //   Width: "200px",
  //   height: "600px",
  //   margin: theme.spacing(1),
  //   // backgroundColor: "rgb(238, 232, 216)",
  // },
  imgWrap: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(1),
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    "&:hover": {
      filter: "brightness(0.4)",
    },
  },

  carBtn: {
    backgroundColor: "transparent",
    border: "none",
  },
  productName: {
    fontFamily: "one-dam-bold",
    fontSize: "20px",
  },
  text: {
    fontSize: "20px",
  },
  paper: {
    height: "auto",
    width: "90%",
    margin: theme.spacing(1),
  },
  media: {
    height: "auto",
    width: "auto",
    paddingTop: "90%",
    objectFit: "contain",
    transition: "0.4s",
    "&:hover": {
      filter: "brightness(0.4)",
    },
  },

  textCard: {
    color: "rgb(80, 85, 88)",
    fontWeight: "500",
    fontFamily: "Noto Sans SC",
    fontSize: "18px",
    textAlign: "left",
    marginLeft: theme.spacing(1),
  },
  itemVendor: {
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "one-dam-light",
    textAlign: "left",
    marginLeft: theme.spacing(1),
  },
  carouselWrap: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    maxHeight: "30rem",
    maxWidth: "1200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  shopBtn: {
    width: "100%",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default function ItemCarousel(props) {
  const items = props.items;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <CarouselProvider
        naturalSlideWidth={100}
        // naturalSlideHeight={200}
        isIntrinsicHeight={true}
        totalSlides={items.length}
        visibleSlides={3}
        infinite={true}
      >
        <Slider>
          <div className={styles.carouselWrap}>
            {items.map((item) => (
              <Slide index={items.indexOf(item)} key={items.indexOf(item)}>
                {/* <div className={styles.paper}>
                <Link
                  to={`/shop/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.imgWrap}>
                    <img
                      src={item.images[0].Location}
                      className={styles.img}
                      alt={item.description}
                    />
                  </div>
                </Link>
                <Typography className={styles.productName}>
                  {item.name}
                </Typography>
                <Typography className={styles.text}>
                  ${parseFloat(item.price).toFixed(2)}
                </Typography>
              </div> */}
                <Paper elevation={1} className={styles.paper}>
                  <Link to={`/shop/${item._id}`}>
                    <CardMedia
                      className={styles.media}
                      image={item.images[0].Location}
                      title={item.name}
                      loading="lazy"
                    />
                  </Link>
                  <Button className={styles.shopBtn}>
                    <Typography style={{ fontFamily: "one-dam-bold" }}>
                      View
                    </Typography>
                  </Button>
                  {/* <Typography
                    variant="body1"
                    component="p"
                    className={styles.textCard}
                  >
                    {item.name} | {item.gender}
                  </Typography>
                  <Typography
                    variant="body1"
                    // component="span"
                    color="textSecondary"
                    className={styles.itemVendor}
                  >
                    {item.vendor}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={styles.itemVendor}
                    style={{ fontWeight: "500" }}
                  >
                    {`$${parseFloat(item.price).toFixed(2)}`}
                  </Typography> */}
                </Paper>
              </Slide>
            ))}
          </div>
        </Slider>
        <div
          style={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          <ButtonBack className={styles.carBtn}>
            <ArrowBackIosIcon
              style={{ fontSize: "30px", marginRight: "2rem" }}
            />
          </ButtonBack>
          <ButtonNext className={styles.carBtn}>
            <ArrowForwardIosIcon
              style={{ fontSize: "30px", marginLeft: "2rem" }}
            />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}
