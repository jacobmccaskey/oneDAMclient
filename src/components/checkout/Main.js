import React, { useContext, useState, useEffect } from "react";
import { User } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckboxShipping from "./Checkbox";
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
    // height: "40rem",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      textAlign: "center",
      width: "100%",
      display: "block",
      position: "relative",
    },
  },
  itemContainer: {
    borderRadius: "2px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)",
    backgroundColor: "white",
    width: "100%",
    display: "block",
    textAlign: "left",
    marginBottom: theme.spacing(1),
    // display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
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

  checkOutDiv: {
    // float: "right",
    color: "black",
    textAlign: "left",
    margin: "auto",
    width: "50%",
    borderRadius: "1px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "0%",
      display: "block",
      position: "relative",
      marginBottom: "1rem",
    },
  },

  shippingBtn: {
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#6F00FF",
      color: "white",
    },
  },
  checkoutBtn: {
    width: "100%",
    backgroundColor: "lightgrey",
    color: "black",
    borderRadius: "0px 0px 1px 1px",
    // marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#6F00FF",
      color: "white",
    },
  },

  shippingFormWrap: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "white",
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

  cartWrap: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      postion: "relative",
      // display: "block",
      // minHeight: "100vh",
      height: "auto",
    },
  },
  checkOutFormBtn: {
    marginBottom: theme.spacing(1),
  },
}));

export default function Checkout() {
  const styles = useStyles();
  const context = useContext(User);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [showShippingForm, setShowShippingForm] = useState("none");
  const [checked, setChecked] = useState(false);
  // const [disableCheckoutBtn, setDisableCheckoutBtn] = useState(false);

  const {
    cart,
    auth,
    token,
    guest,
    // guestId,
    postalCode,
    setPostalCode,
    address,
    setAddress,
    addressTwo,
    setAddressTwo,
    city,
    setCity,
    setState,
    state,
    county,
    email,
    setEmail,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    phone,
    setPhone,
  } = context;

  //hook for showing alertModal. imported from react-alert
  const alert = useAlert();
  const validateInputForPickup = async () => {
    if (!email || !firstName || !lastName) {
      return false;
    }
    return true;
  };
  const validateInputForShipping = async () => {
    if (
      !address ||
      !city ||
      !state ||
      !postalCode ||
      !email ||
      !firstName ||
      !lastName ||
      !phone
    ) {
      return false;
    }
    return true;
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (checked === false) {
      const validate = await validateInputForShipping();
      if (validate === false) {
        return alert.show(
          "please make sure to fill in all the shipping information"
        );
      }
    }
    if (checked === true) {
      const validate = await validateInputForPickup();
      if (validate === false) {
        return alert.show(
          "please make sure to fill in your name and email before continuing to payment"
        );
      }
    }

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
      // guestId: guestId || "null",
      country: "US",
      totalItems: itemIDs.length,
      name: `${firstName} ${lastName}`,
      pickupOrder: checked,
      email: email,
      phone: phone,
      amount: total,
      shipping: {
        address: address,
        addressTwo: addressTwo,
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

  const handleCheckboxClick = () => {
    checked === false ? setChecked(true) : setChecked(false);
  };

  useEffect(() => {
    let amount = 0;
    cart.forEach((item) => (amount += item.item.price * item.count));
    setSubtotal(amount);

    setTax(parseFloat(subtotal).toFixed(2) * 0.06);
    setTotal(subtotal + tax);
  }, [cart, subtotal, tax]);

  return (
    <React.Fragment>
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
            <div className={styles.cartContainer}>
              <Typography variant="h4" style={{ fontFamily: "one-dam-bold" }}>
                Cart
              </Typography>
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
                        {index.item.quantity > 0 ? "In Stock" : "Out of Stock"}
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
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <CheckboxShipping
                handleClick={handleCheckboxClick}
                checked={checked}
              />
              <Paper elevation={1} className={styles.checkOutDiv}>
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
                  {parseFloat(tax).toFixed(2)}
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
                <Typography style={{ textAlign: "center" }}>
                  {parseFloat(total).toFixed(2)}
                </Typography>
                <div
                  style={
                    checked === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  <Button
                    className={styles.shippingBtn}
                    onClick={() => setShowShippingForm("block")}
                  >
                    <Typography>Add Shipping Information</Typography>
                  </Button>
                </div>
                <div
                  className={styles.shippingFormWrap}
                  style={{ display: `${showShippingForm}` }}
                >
                  <div>
                    {/* <Typography>First Name</Typography> */}
                    <TextField
                      fullWidth
                      required
                      className={styles.checkOutFormBtn}
                      label="first name"
                      variant="outlined"
                      size="small"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {/* <Typography>Last Name</Typography> */}
                    <TextField
                      fullWidth
                      className={styles.checkOutFormBtn}
                      variant="outlined"
                      label="last name"
                      size="small"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {/* <Typography>Email</Typography> */}
                    <TextField
                      className={styles.checkOutFormBtn}
                      fullWidth
                      required
                      variant="outlined"
                      label="email"
                      size="small"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <Typography>Phone</Typography> */}
                    <TextField
                      fullWidth
                      className={styles.checkOutFormBtn}
                      required
                      variant="outlined"
                      label="phone"
                      size="small"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* <Typography>Address</Typography> */}
                    <TextField
                      className={styles.checkOutFormBtn}
                      fullWidth
                      required
                      variant="outlined"
                      label="address"
                      size="small"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {/* <Typography>Address Two</Typography> */}
                    <TextField
                      className={styles.checkOutFormBtn}
                      fullWidth
                      variant="outlined"
                      label="address two/optional"
                      size="small"
                      value={addressTwo}
                      onChange={(e) => setAddressTwo(e.target.value)}
                    />
                    {/* <Typography>City</Typography> */}
                    <TextField
                      className={styles.checkOutFormBtn}
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    {/* <Typography>State</Typography> */}
                    <TextField
                      className={styles.checkOutFormBtn}
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                    {/* <Typography>postal code</Typography> */}
                    <TextField
                      className={styles.checkOutFormBtn}
                      variant="outlined"
                      size="small"
                      label="postal code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                </div>

                <Button
                  className={styles.checkoutBtn}
                  onClick={handleClick}
                  // disabled={disableCheckoutBtn}
                >
                  <Typography>
                    {auth === true ? "go to checkout" : "checkout as guest"}
                  </Typography>
                </Button>
              </Paper>
            </div>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

// const arrayOfStates = [
//   "Alabama",
//   "Alaska",
//   "American Samoa",
//   "Arizona",
//   "Arkansas",
//   "California",
//   "Colorado",
//   "Connecticut",
//   "Delaware",
//   "District of Columbia",
//   "Federated States of Micronesia",
//   "Florida",
//   "Georgia",
//   "Guam",
//   "Hawaii",
//   "Idaho",
//   "Illinois",
//   "Indiana",
//   "Iowa",
//   "Kansas",
//   "Kentucky",
//   "Louisiana",
//   "Maine",
//   "Marshall Islands",
//   "Maryland",
//   "Massachusetts",
//   "Michigan",
//   "Minnesota",
//   "Mississippi",
//   "Missouri",
//   "Montana",
//   "Nebraska",
//   "Nevada",
//   "New Hampshire",
//   "New Jersey",
//   "New Mexico",
//   "New York",
//   "North Carolina",
//   "North Dakota",
//   "Northern Mariana Islands",
//   "Ohio",
//   "Oklahoma",
//   "Oregon",
//   "Palau",
//   "Pennsylvania",
//   "Puerto Rico",
//   "Rhode Island",
//   "South Carolina",
//   "South Dakota",
//   "Tennessee",
//   "Texas",
//   "Utah",
//   "Vermont",
//   "Virgin Island",
//   "Virginia",
//   "Washington",
//   "West Virginia",
//   "Wisconsin",
//   "Wyoming",
// ];
