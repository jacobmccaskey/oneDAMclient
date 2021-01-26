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
import CheckIcon from "@material-ui/icons/Check";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "4rem",
    marginBottom: "4rem",
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
    // backgroundColor: "rgb(148,0,211)",
    backgroundColor: "rgb(96, 127, 128)",
    width: "30%",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      margin: "auto",
    },
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
    winWidth: "100%",
    display: "inline-block",
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
  counter: {
    borderRadius: "5px",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  inputLabel: {
    minWidth: "100%",
  },
  selectLabel: {
    width: "100px",
  },
  checkoutButton: {
    display: "block",
    backgroundColor: "rgb(152, 118, 84)",
    width: "30%",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      margin: "auto",
    },
  },

  checkoutBtnLinkDisabled: {
    textDecoration: "none",
    display: "none",
  },
  checkoutBtnLinkEnabled: {
    textDecoration: "none",
  },
}));

export default function ViewItem() {
  const classes = useStyles();
  const context = useContext(User);

  const [item, setItem] = useState({}); //item is object
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  const [addItem, setaddItem] = useState(false);

  const [messageUser, setMessageUser] = useState("");
  const [sizePick, setSizePick] = useState("");
  const [color, setColor] = useState("");
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [amountInStock, setAmountInStock] = useState(null);

  const { ID } = useParams();

  const showModal = () => {
    setShowModalMessage(true);
  };
  const closeModal = () => {
    setShowModalMessage(false);
  };

  //either adds to cart or removes based on button events
  const removeItemFromCart = (item) => {
    setaddItem(false);
    context.deleteCart(item);
  };

  const handleItemAndCart = (item) => {
    if (count === 0 || sizePick === "") {
      setMessageUser(
        "looks like something went wrong :/ please make sure you have picked your size and how many you would like to buy. Thanks! "
      );
      return showModal();
    }

    setaddItem(true);
    context.addCart({
      item: item,
      _id: item._id,
      count: count,
      size: sizePick,
      color: color,
    });

    if ((count === 0 || sizePick === "") && addItem === false) {
      setMessageUser(
        "looks like something went wrong :/ please make sure you have picked your size and how many you would like to buy. Thanks! "
      );
      showModal();
    }
  };

  const handleSizePickAndShowColors = (target) => {
    setSizePick(target);
    let colorsForSize = [];
    for (const index of item.sizes) {
      if (index.size === target) {
        index.variant.forEach((item) => colorsForSize.push(item.color));
        // console.log(colorsForSize);
        setColors(colorsForSize);
      }
    }
  };
  //loads at render to fetch product and determine if already exists in user cart
  useEffect(() => {
    //add vendor, sizes & in-stock bool
    axios.get(`${process.env.REACT_APP_GETITEM}/${ID}`).then((res) => {
      const { data } = res;
      setItem(data);
      setImages(data.images);
      setSizes(data.sizes);
      setAmountInStock(data.quantity);
      // setColors(data.colors);
      if (data.quantity <= 0) {
        setInStock(false);
        setAmountInStock(data.quantity);
      }
    });
  }, [ID, context.cart]);

  useEffect(() => {
    const cartCheck = context.cart.find((element) => element._id === ID);
    if (cartCheck !== undefined && cartCheck.item._id) {
      setaddItem(true);
    }
  }, [ID, context.cart]);

  return (
    <Container maxWidth="md" className={classes.box}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link to="/" className={classes.breadcrumbs}>
          <Typography className={classes.breadcrumbs}>
            <HomeIcon style={{ fontSize: "25px" }} />
          </Typography>
        </Link>
        <Link to="/shop" className={classes.breadcrumbs}>
          <Typography className={classes.breadcrumbs}>shop</Typography>
        </Link>
        <Link to={`/shop/${item._id}`} className={classes.breadcrumbs}>
          <Typography className={classes.breadcrumbs}>{item.name}</Typography>
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
            <Typography
              style={
                addItem === true ? { display: "none" } : { display: "block" }
              }
            >
              {inStock === true ? "In Stock" : "Out of Stock"}
            </Typography>
            <Typography
              style={
                addItem === true ? { display: "block" } : { display: "none" }
              }
            >
              <CheckIcon />
              item added to cart
            </Typography>
          </div>
        </div>
        <div className={classes.divInfo}>
          <h2>{item.name}</h2>
          <Typography>${parseFloat(item.price).toFixed(2)}</Typography>

          <span style={{ fontSize: "12px", textDecoration: "underline" }}>
            {item.gender}
          </span>
          <br />
          <div className={classes.counter}>
            <RemoveIcon
              onClick={() =>
                setCount((prevState) => {
                  prevState === 0 ? setCount(0) : setCount(prevState - 1);
                })
              }
            />
            <Typography component="body2" style={{ margin: "0.5rem" }}>
              {count}
            </Typography>
            <AddIcon
              onClick={() =>
                setCount((prevState) =>
                  prevState === amountInStock
                    ? setCount(amountInStock)
                    : setCount(prevState + 1)
                )
              }
            />
          </div>
          <br />
          <div style={{ display: "block" }}>
            <FormControl className={classes.formControl}>
              <InputLabel id="size" className={classes.inputLabel}>
                Size
              </InputLabel>
              <Select
                labelId="size"
                className={classes.selectLabel}
                id="size"
                displayEmpty
                value={sizePick}
                style={{ textAlign: "right" }}
                onChange={(e) => handleSizePickAndShowColors(e.target.value)}
              >
                {sizes.map((item) => (
                  <MenuItem value={item.size} key={item.size}>
                    {item.size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* selector for color */}
            <FormControl className={classes.formControl}>
              <InputLabel id="size" className={classes.inputLabel}>
                Color
              </InputLabel>
              <Select
                labelId="color"
                className={classes.selectLabel}
                id="color"
                displayEmpty
                value={color}
                style={{ textAlign: "right" }}
                onChange={(e) => setColor(e.target.value)}
              >
                {colors.map((color) => (
                  <MenuItem value={color} key={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <br />
          <Button
            className={classes.cartButton}
            onClick={() => handleItemAndCart(item)}
            disabled={addItem}
          >
            add to cart
          </Button>
          <Box m={1} />
          <Button
            style={
              addItem === true ? { display: "block" } : { display: "none" }
            }
            className={classes.cartButton}
            onClick={() => removeItemFromCart(item)}
          >
            Remove From Cart
          </Button>
          <Box m={1} />
          <Link
            to="/checkout"
            className={
              context.cart.length === 0
                ? `${classes.checkoutBtnLinkDisabled}`
                : `${classes.checkoutBtnLinkEnabled}`
            }
          >
            <Button
              className={classes.checkoutButton}
              disabled={context.cart.length === 0}
            >
              <Typography>Checkout</Typography>
            </Button>
          </Link>
          <br />
          <div className={classes.description}>
            <p>{item.description}</p>
          </div>
          <p style={{ color: "grey" }}>
            location: <span>United States</span>
          </p>
          <p style={{ color: "grey" }}>
            vendor: <span>{item.vendor}</span>
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
