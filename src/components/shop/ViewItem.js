import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
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
import Modal from "@material-ui/core/Modal";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";

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
  formControl: {
    margin: theme.spacing(1),
    winWidth: 120,
  },
  modal: {
    top: 0,
    bottom: 0,
    textAlign: "center",
    backgroundColor: "white",
    width: "100%",
    border: "none",
  },
  modalContainer: {
    width: "100%",
    height: "5rem",
    margin: "auto",
    position: "absolute",
    textAlign: "center",
    backgroundColor: "white",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    verticalAlign: "center",
  },
  breadcrumbs: {
    color: "grey",
    textDecoration: "none",
    fontSize: "15px",
  },
}));

export default function ViewItem() {
  const classes = useStyles();
  const context = useContext(User);

  const [item, setItem] = useState({}); //item is object
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [sizes, setSizes] = useState([]);

  const [addItem, setaddItem] = useState(false);

  const [messageUser, setMessageUser] = useState("");
  const [sizePick, setSizePick] = useState("");
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [inStock, setInStock] = useState(true);

  const { ID } = useParams();

  const showModal = () => {
    setShowModalMessage(true);
  };
  const closeModal = () => {
    setShowModalMessage(false);
  };

  //either adds to cart or removes based on button events
  const handleItemAndCart = (item) => {
    if (addItem === false && count !== 0 && sizePick !== "") {
      setaddItem(true);
      context.addCart({
        item: item,
        _id: item._id,
        count: count,
        size: sizePick,
      });
    }
    if (addItem === true) {
      setaddItem(false);
      context.deleteCart(item);
    }
    if ((count === 0 || sizePick === "") && addItem === false) {
      setMessageUser(
        "looks like something went wrong :/ please make sure you have picked your size and how many you would like to buy. Thanks! "
      );
      showModal();
    } else return null;
  };
  //loads at render to fetch product and determine if already exists in user cart
  useEffect(() => {
    //add vendor, sizes & in-stock bool
    axios.get(`${process.env.REACT_APP_GETITEM}/${ID}`).then((res) => {
      const { data } = res;
      setItem(data);
      setImages(data.images);
      setSizes(data.sizes);
      if (data.quantity <= 0) {
        setInStock(false);
      }
    });
  }, [ID]);

  useEffect(() => {
    const cartCheck = context.cart.find((element) => element.item._id === ID);
    if (cartCheck !== undefined && cartCheck.item._id) {
      setaddItem(true);
    }
  }, [ID, context.cart]);

  return (
    <Container maxWidth="md" className={classes.box}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link to="/" className={classes.breadcrumbs}>
          <HomeIcon style={{ fontSize: "25px" }} />
        </Link>
        <Link to="/shop" className={classes.breadcrumbs}>
          <Typography className={classes.breadcrumbs}>shop</Typography>
        </Link>
        <Link to={`/shop/${item._id}`} className={classes.breadcrumbs}>
          {item.name}
        </Link>
      </Breadcrumbs>
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
            <FormControl className={classes.formControl}>
              <InputLabel style={{ textAlign: "left" }} id="size">
                Size
              </InputLabel>
              <Select
                labelId="size"
                id="size"
                displayEmpty
                value={sizePick}
                style={{ textAlign: "right" }}
                onChange={(e) => setSizePick(e.target.value)}
              >
                {sizes.map((item) => (
                  <MenuItem value={item.size} key={item.size}>
                    {item.size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <br />
          <Button
            className={classes.cartButton}
            onClick={() => handleItemAndCart(item)}
          >
            {addItem === true ? "remove from cart" : "add to cart"}
          </Button>
          <br />
          <div className={classes.description}>
            <p>{item.description}</p>
          </div>
          <p style={{ color: "grey" }}>
            location: <span>United States</span>
          </p>
        </div>
      </div>
      {/* modal for cart error (not adding size or quantity to order) */}
      <Modal
        open={showModalMessage}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container className={classes.modalContainer}>
          <div className={classes.modal}>
            <p>{messageUser}</p>
          </div>
        </Container>
      </Modal>
    </Container>
  );
}
