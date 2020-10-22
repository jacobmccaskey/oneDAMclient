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
    backgroundColor: "rgb(240,248,255)",
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
    top: 0,
    backgroundColor: "#002244",
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
}));

export default function Checkout() {
  const styles = useStyles();
  const context = useContext(User);
  const [subtotal, setSubtotal] = useState(0);
  const { cart } = context;
  //hook for showing alertModal. imported from react-alert
  const alert = useAlert();

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    //replace with .env variable
    const response = await fetch(
      "http://localhost:4545/orders/checkout-session",
      {
        method: "POST",
      }
    );
    const session = await response.json();

    console.log(session);
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
    // if (result.error) {
    //   alert.show(
    //     "whoops!! :( Looks like there was a problem with your request. Please try again in a moment.."
    //   );
    // }
  };

  useEffect(() => {
    let amount = 0;
    cart.forEach((item) => (amount += item.item.price * item.count));
    setSubtotal(amount);
  }, [cart]);
  return (
    <div style={{ width: "100%" }}>
      {cart.length === 0 ? (
        <React.Fragment>
          <Container className={styles.emptyCartContainer}>
            <Typography variant="h5">
              It looks like your cart is empty. would you like to{" "}
              <Link to="/shop">shop some of our products</Link>
              <br />
              <br />
              Have an account? <Link to="/signin">Sign in</Link>
            </Typography>
          </Container>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={styles.shoppingCartHeader}>
            <h1>Shopping Cart</h1>
          </div>
          <Container>
            <Container className={styles.cartContainer}>
              <h3>
                {context.firstName}'s Cart ({cart.length} items)
              </h3>
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
                        <p>Price: ${index.item.price}</p>
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
              <Typography variant="h5" style={{ textDecoration: "underline" }}>
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
              <Typography variant="h5" style={{ textDecoration: "underline" }}>
                Subtotal
              </Typography>
              <Typography>${subtotal}</Typography>
              <Typography>(plus tax)</Typography>
              <Button className={styles.checkoutBtn} onClick={handleClick}>
                <Typography>go to checkout</Typography>
              </Button>
            </div>
          </Container>
        </React.Fragment>
      )}
    </div>
  );
}
