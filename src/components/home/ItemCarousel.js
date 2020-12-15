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

import "pure-react-carousel/dist/react-carousel.es.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    height: "auto",
    margin: "auto",
  },

  paper: {
    Width: "200px",
    height: "600px",
    margin: theme.spacing(1),
    backgroundColor: "rgb(238, 232, 216)",
  },
  imgWrap: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(1),
  },

  img: {
    width: "100%",
    height: "100%",
  },
  carWrap: {
    maxWidth: "550px",
    margin: "auto",
    backgroundColor: "rgb(238, 232, 216)",
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
}));

export default function ItemCarousel(props) {
  const items = props.items;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Paper className={styles.carWrap} elevation={3}>
        <CarouselProvider
          naturalSlideWidth={110}
          naturalSlideHeight={200}
          // isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={3}
          infinite={true}
        >
          <Slider>
            {items.map((item) => (
              <Slide index={items.indexOf(item)} key={items.indexOf(item)}>
                <div className={styles.paper}>
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
                </div>
              </Slide>
            ))}
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
      </Paper>
    </div>
  );
}
