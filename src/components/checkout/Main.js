import React, { useContext, useState, useEffect } from "react";
import { User } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useAlert } from "react-alert";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_DEV);

const useStyles = makeStyles((theme) => ({
  emptyCartContainer: {
    textAlign: "center",
    paddingTop: "20%",
    paddingBottom: "80%",
  },
  thumbnail: {
    width: "120px",
    height: "auto",
    objectFit: "cover",
    marginLeft: "1rem",
    padding: "1rem",
  },

  cartContainer: {
    width: "60%",
    display: "inline-block",
    marginBottom: "1rem",
    paddingBottom: "1rem",
    height: "40rem",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      textAlign: "center",
      width: "100%",
      display: "block",
    },
  },
  itemContainer: {
    borderRadius: "2px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    backgroundColor: "white",
    width: "100%",
    display: "block",
    textAlign: "left",
    marginBottom: theme.spacing(1),
    // display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "block",
    },
  },
  shoppingCartHeader: {
    backgroundColor: "#F8F8F8",
    borderRadius: "2px",
    marginBottom: "2rem",
    padding: "1rem",
    width: "100%",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)",
  },
  dynamicDisplay: {
    display: "",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  checkOutDiv: {
    float: "right",
    color: "white",
    textAlign: "left",
    marginLeft: "1rem",
    backgroundColor: "rgb(27,27,27)",
    marginTop: "5rem",
    width: "35%",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      marginTop: "0%",
      display: "relative",
      marginBottom: "1rem",
    },
  },
  checkoutBtn: {
    width: "100%",
    backgroundColor: "lightgrey",
    color: "black",
    borderRadius: "0px 0px 5px 5px",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#6F00FF",
      color: "white",
    },
  },

  emptyCartShopBtn: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgb(49, 48, 44)",
    color: "rgb(243, 242, 220)",
    textTransfrom: "none",
    width: "50%",
    transition: "1s",
    "&:hover": {
      color: "rgb(49, 48, 44)",
      backgroundColor: "white",
      width: "60%",
      border: "1px grey",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

export default function Checkout() {
  const styles = useStyles();
  const context = useContext(User);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const {
    cart,
    auth,
    token,
    guest,
    guestId,
    postalCode,
    address,
    addressTwo,
    city,
    state,
    county,
    email,
    firstName,
    lastName,
  } = context;
  //hook for showing alertModal. imported from react-alert
  const alert = useAlert();

  const handleClick = async (event) => {
    let itemIDs = [];
    await cart.forEach((item) =>
      itemIDs.push({
        id: item._id,
        count: item.count,
        size: item.size,
        color: item.color,
      })
    );
    const data = {
      order: itemIDs,
      user_token: token,
      guest_bool: guest,
      guestId: guestId || "null",
      country: "US",
      totalItems: itemIDs.length,
      name: `${firstName} ${lastName}`,
      email: email,
      shipping: {
        address: address,
        addressTwo: addressTwo || "",
        postalCode: postalCode,
        city: city,
        state: state,
        county: county,
        country: "US",
      },
    };
    const stripe = await stripePromise;
    const response = await fetch(process.env.REACT_APP_CHECKOUT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      alert.show(
        "whoops!! :( Looks like there was a problem with your request. Please try again in a moment.."
      );
    }
  };

  useEffect(() => {
    let amount = 0;
    cart.forEach((item) => (amount += item.item.price * item.count));
    setSubtotal(amount);

    setTax(parseFloat(subtotal).toFixed(2) * 0.07);
    setTotal(subtotal + tax);
  }, [cart, subtotal, tax]);
  return (
    <div style={{ width: "100%" }}>
      {cart.length === 0 ? (
        <React.Fragment>
          <Container className={styles.emptyCartContainer}>
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <Button className={styles.emptyCartShopBtn}>
                <Typography style={{ fontFamily: "one-dam-bold" }}>
                  Shop Our Store
                </Typography>
              </Button>
            </Link>
            <br />
            <br />
            {auth === true ? (
              ""
            ) : (
              <Typography>
                Have an account? <Link to="/signin">Sign in</Link>
              </Typography>
            )}
          </Container>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Container style={{ marginTop: "5rem" }}>
            <Container className={styles.cartContainer}>
              <Typography variant="h4" style={{ fontFamily: "one-dam-bold" }}>
                Cart
              </Typography>
              <div className={styles.dynamicDisplay}>
                {cart.map((index) => (
                  <div key={index.item.name} className={styles.itemContainer}>
                    <div style={{ display: "flex" }}>
                      <div style={{ flex: 1, textAlign: "center" }}>
                        <img
                          src={index.item.images[0].Location}
                          className={styles.thumbnail}
                          alt={index.item.name}
                        />
                        <p>Price: ${parseFloat(index.item.price).toFixed(2)}</p>
                      </div>
                      <div style={{ flex: 2 }}>
                        <h3>{index.item.name}</h3>
                        <p>
                          Size: {index.size} ({index.count})
                        </p>
                        <span>
                          {index.item.quantity > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </span>
                        <p>Vendor: {index.item.vendor}</p>

                        <Button onClick={() => context.deleteCart(index)}>
                          <DeleteIcon />
                          delete from cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
            <div className={styles.checkOutDiv}>
              <Typography
                variant="h5"
                style={{
                  textDecoration: "underline",
                  fontFamily: "one-dam-light",
                  marginLeft: "1rem",
                }}
              >
                Summary
              </Typography>
              <ul>
                {context.cart.map((index) => (
                  <div
                    style={{
                      textAlign: "left",
                    }}
                    key={index.item.name}
                  >
                    <li>
                      <Typography>
                        {index.item.name} X {index.count}
                      </Typography>
                    </li>
                  </div>
                ))}
              </ul>
              <Typography
                style={{
                  textDecoration: "underline",
                  fontSize: "18px",
                  fontFamily: "one-dam-light",
                  marginLeft: "1rem",
                }}
              >
                Subtotal
              </Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                ${subtotal}
              </Typography>
              <Typography
                style={{
                  textDecoration: "underline",
                  fontSize: "18px",
                  fontFamily: "one-dam-light",
                  marginLeft: "1rem",
                }}
              >
                tax
              </Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                {tax.toFixed(2)}
              </Typography>
              <Typography
                variant="h5"
                style={{
                  textDecoration: "underline",
                  fontFamily: "one-dam-light",
                  textAlign: "center",
                }}
              >
                Total
              </Typography>
              <Typography style={{ textAlign: "center" }}>{total}</Typography>
              <Button className={styles.checkoutBtn} onClick={handleClick}>
                <Typography>
                  {auth === true ? "go to checkout" : "checkout as guest"}
                </Typography>
              </Button>
            </div>
          </Container>
        </React.Fragment>
      )}
    </div>
  );
}
