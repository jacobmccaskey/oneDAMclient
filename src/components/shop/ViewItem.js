import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { User } from "../../Context";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme) => ({
  box: {
    border: "solid black",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "relative",
    },
  },
  div: {
    border: "solid red",
    display: "inline-block",
    width: "50%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
    },
  },
  carouselContainer: {
    display: "relative",
    width: "60%",
    height: "auto",
  },
}));

export default function ViewItem() {
  const classes = useStyles();
  const context = useContext(User);

  const [item, setItem] = useState([]);
  // const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  // const [description, setDescription] = useState();
  // const [price, setPrice] = useState();
  const [count, setCount] = useState(0);
  const [addItem, setaddItem] = useState(false);
  const [status, setStatus] = useState();
  const { ID } = useParams();

  useEffect(() => {
    //add vendor, sizes & in-stock bool
    axios.get(`${process.env.REACT_APP_GETITEM}/${ID}`).then((res) => {
      console.log(res.data);
      const { data, status } = res;
      setItem([data]);
      setImages(data.images);
      setStatus(status);
      // setStatus(status);
    });
  }, [ID]);

  return (
    <Container maxWidth="md" className={classes.box}>
      <div className={classes.div}>
        <div className={classes.carouselContainer}>
          <Carousel>
            {images.map((image) => (
              <img src={image.Location} alt={image.key} key={image.key} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={classes.div}>
        {item.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
    </Container>
  );
}
