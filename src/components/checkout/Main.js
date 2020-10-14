import React, { useContext, useState, useEffect } from "react";
import { User } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  emptyCartContainer: {
    textAlign: "center",
    paddingTop: "20%",
    paddingBottom: "80%",
    backgroundColor: "rgb(240,248,255)",
  },
  thumbnail: {
    width: "100px",
    height: "auto",
    objectFit: "cover",
    marginLeft: "1rem",
    padding: "1rem",
  },
  containerCover: {
    backgroundColor: "rgb(240,248,255)",
    position: "absolute",
    top: 0,
    left: 0,
    // zIndex: -1000,
  },
  cartContainer: {
    backgroundColor: "rgb(240,248,255)",
    width: "100%",
    height: "auto",
    textAlign: "center",
  },
  itemContainer: {
    borderRadius: "3px 3px 3px 3px",
    boxShadow: "0px 0px 2px 1px grey",
    backgroundColor: "white",
    width: "30rem",
    textAlign: "left",
    margin: "1rem",
    display: "inline-block",
  },
}));

export default function Checkout() {
  const styles = useStyles();
  const context = useContext(User);
  const { cart } = context;
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div>
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
        <div className={styles.cartContainer}>
          {cart.map((index) => (
            <Container>
              <div key={index.item.name} className={styles.itemContainer}>
                <img
                  src={index.item.images[0].Location}
                  className={styles.thumbnail}
                  alt={index.item.name}
                />
              </div>
            </Container>
          ))}
        </div>
      )}
    </div>
  );
}
