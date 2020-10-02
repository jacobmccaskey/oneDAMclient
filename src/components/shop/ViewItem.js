import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { User } from "../../Context";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "2rem",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "relative",
    },
  },
  divPhoto: {
    display: "inline-block",
    width: "40%",
    // textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
    },
  },

  divInfo: {
    top: "0",
    display: "inline-block",
    textAlign: "left",
    width: "60%",
    verticalAlign: "top",
    marginTop: "3rem",
    // textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "block",
      width: "100%",
    },
  },
  carouselContainer: {
    display: "relative",
    width: "40%",
    height: "auto",
    margin: "0 auto",
  },
  cartButton: {
    backgroundColor: "rgb(148,0,211)",
    marginTop: "1rem",
  },
  btnTransform: {
    backgroundColor: "rgb(148,0,211)",
    marginTop: "1rem",
  },
  description: {
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      textAlign: "center",
    },
  },
}));

export default function ViewItem() {
  const classes = useStyles();
  const context = useContext(User);

  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [addItem, setaddItem] = useState(false);
  const [status, setStatus] = useState();
  const [messageUser, setMessageUser] = useState("");
  const [sizePick, setSizePick] = useState(null);

  const { ID } = useParams();

  useEffect(() => {
    //add vendor, sizes & in-stock bool
    axios.get(`${process.env.REACT_APP_GETITEM}/${ID}`).then((res) => {
      const { data, status } = res;
      setItem(data);
      setImages(data.images);
      setSizes(data.sizes);
      setStatus(status);
    });
  }, [ID]);
  return (
    <Container maxWidth="md" className={classes.box}>
      <div className={classes.box}>
        <div className={classes.divPhoto}>
          <div className={classes.carouselContainer}>
            <Carousel>
              {images.map((image) => (
                <img src={image.Location} alt={image.key} key={image.key} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className={classes.divInfo}>
          <h2>{item.name}</h2>
          <span style={{ fontSize: "25px", textDecoration: "undeline" }}>
            {item.vendor}
          </span>
          <br />
          <RemoveIcon onClick={() => setCount((prevState) => prevState - 1)} />
          <Typography component="body2" style={{ margin: "0.5rem" }}>
            {count}
          </Typography>
          <AddIcon onClick={() => setCount((prevState) => prevState + 1)} />
          <br />
          <div style={{ display: "block" }}>
            <FormControl>
              <InputLabel id="size">Select Size</InputLabel>
              <Select
                labelId="size"
                id="size"
                value={sizePick}
                onChange={(e) => setSizePick(e.target.value)}
              >
                {sizes.map((item) => (
                  <MenuItem value={item.size}>{item.size}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <br />
          <Button className={classes.cartButton}>add to cart</Button>
          <br />
          <div className={classes.description}>
            <p>{item.description}</p>
          </div>
          <p style={{ color: "grey" }}>
            location: <span>United States</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
