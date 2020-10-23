import React, { useContext, useState } from "react";
import { User } from "../../Context";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useStyles } from "./styles";

//function to cut back on amount of code written in Account Component
function InputForm(props) {
  const style = useStyles();
  const { hook, toEdit, setHook } = props;
  return (
    <Input
      value={hook}
      disabled={!toEdit}
      disableUnderline
      className={!toEdit ? style.inputReadOnly : style.inputCanEdit}
      onChange={(e) => setHook(e.target.value)}
    />
  );
}

export default function Account() {
  const style = useStyles();
  const context = useContext(User);
  const [toEdit, setToEdit] = useState(false);
  const [showForm, setShowForm] = useState({
    nameMenu: true,
    shippingMenu: false,
    recentOrders: false,
    favorites: false,
    contactUs: false,
  });

  const openNameForm = () => {
    setShowForm({
      nameMenu: true,
      shippingMenu: false,
      recentOrders: false,
      favorites: false,
      contactUs: false,
    });
  };

  const openShippingForm = () => {
    setShowForm({
      nameMenu: false,
      shippingMenu: true,
      recentOrders: false,
      favorites: false,
      contactUs: false,
    });
  };

  const openOrdersPage = () => {
    setShowForm({
      nameMenu: false,
      shippingMenu: false,
      recentOrders: true,
      favorites: false,
      contactUs: false,
    });
  };

  const openFavoritesPage = () => {
    setShowForm({
      nameMenu: false,
      shippingMenu: false,
      recentOrders: false,
      favorites: true,
      contactUs: false,
    });
  };

  const openContactPage = () => {
    setShowForm({
      nameMenu: false,
      shippingMenu: false,
      recentOrders: false,
      favorites: false,
      contactUs: true,
    });
  };

  const {
    favorites,
    deviceType,
    deleteFav,
    logoutAccount,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    setAddressTwo,
    addressTwo,
    auth,
    email,
    setEmail,
    city,
    state,
    postalCode,
    county,
    setCity,
    setState,
    setPostalCode,
    setCounty,
    phone,
    setPhone,
  } = context;
  return (
    <div>
      <div className={style.root}>
        <Paper className={style.paperLeft}>
          <Container className={style.accountSettingsDiv}>
            <Typography variant="h6" style={{ textDecoration: "underline" }}>
              Account Settings
            </Typography>
            <Button className={style.menuBtn} onClick={openNameForm}>
              Name & Email
            </Button>
            <Button className={style.menuBtn} onClick={openShippingForm}>
              Shipping Address
            </Button>
            <Button className={style.menuBtn} onClick={openOrdersPage}>
              Recent Orders
            </Button>
            <Button className={style.menuBtn} onClick={openFavoritesPage}>
              Favorites
            </Button>
            <Button className={style.menuBtn} onClick={openContactPage}>
              Contact Us
            </Button>
          </Container>
        </Paper>

        <Paper className={style.paperRight}>
          {/* Name and address form */}
          <Container
            style={
              showForm.nameMenu === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <Typography varaint="h6" style={{ textDecoration: "underline" }}>
              Personal Information
            </Typography>
            <div style={{ textAlign: "left" }}>
              <Typography className={style.smallHeader}>Name</Typography>
              <div style={{ display: "inline-block" }}>
                <InputForm
                  toEdit={toEdit}
                  hook={firstName}
                  setHook={setFirstName}
                />

                <InputForm
                  toEdit={toEdit}
                  hook={lastName}
                  setHook={setLastName}
                />
              </div>
              <div style={{ display: "block" }}>
                <div className={style.contactDiv}>
                  <Typography
                    className={style.smallHeader}
                    style={{ display: "inline" }}
                  >
                    Email
                  </Typography>
                  <InputForm toEdit={toEdit} hook={email} setHook={setEmail} />
                </div>
                <Typography
                  className={style.smallHeader}
                  style={{ display: "inline" }}
                >
                  phone
                </Typography>
                <InputForm toEdit={toEdit} hook={phone} setHook={setPhone} />
              </div>
            </div>
          </Container>
          {/* shipping address form */}
          <Container
            style={
              showForm.shippingMenu === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <Typography>shipping</Typography>
          </Container>
          {/* recent orders form */}
          <Container
            style={
              showForm.recentOrders === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <Typography>orders</Typography>
          </Container>
          {/* favorites container */}
          <Container
            style={
              showForm.favorites === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <Typography>fav's</Typography>
          </Container>
          {/* contact form */}
          <Container
            style={
              showForm.contactUs === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <Typography>contact us</Typography>
          </Container>
        </Paper>
      </div>
    </div>
  );
}
