import React, { useContext, useState, useEffect } from "react";
import { User } from "../../Context";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AccountInfoForm from "./AccountInfoForm";
import RecentOrders from "./RecentOrders";
import Favorites from "./Favorites";
import { Link, useParams } from "react-router-dom";
import { useStyles } from "./styles";

export default function Account() {
  const style = useStyles();
  const { option } = useParams();
  const context = useContext(User);
  const [toEdit, setToEdit] = useState(false);
  const [showForm, setShowForm] = useState({
    nameMenu: true,
    recentOrders: false,
    favorites: false,
    contactUs: false,
  });
  const openNameForm = () => {
    setShowForm({
      nameMenu: true,
      recentOrders: false,
      favorites: false,
      contactUs: false,
    });
  };

  const openOrdersPage = () => {
    setShowForm({
      nameMenu: false,
      recentOrders: true,
      favorites: false,
      contactUs: false,
    });
  };

  const openFavoritesPage = () => {
    setShowForm({
      nameMenu: false,
      recentOrders: false,
      favorites: true,
      contactUs: false,
    });
  };

  const openContactPage = () => {
    setShowForm({
      nameMenu: false,
      recentOrders: false,
      favorites: false,
      contactUs: true,
    });
  };

  useEffect(() => {
    if (option === "personalinformation") {
      return setToEdit(true);
    }
    if (option === "recentOrders") {
      return openOrdersPage();
    }
    if (option === "favorites") {
      return openFavoritesPage();
    }
  }, [option]);

  const { auth, orders } = context;
  return (
    <div>
      {auth === false ? (
        <Container style={{ marginTop: "30vh", textAlign: "center" }}>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button variant="contained" className={style.loginBtn}>
              login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button className={style.loginBtn} variant="contained">
              Sign Up
            </Button>
          </Link>
        </Container>
      ) : (
        <div className={style.root}>
          <Paper className={style.paperLeft}>
            <Container className={style.accountSettingsDiv}>
              <Typography variant="h6" style={{ textDecoration: "underline" }}>
                Account Settings
              </Typography>
              <Button className={style.menuBtn} onClick={openNameForm}>
                Personal Information
              </Button>

              <Button className={style.menuBtn} onClick={openOrdersPage}>
                Recent Orders
              </Button>
              <Button className={style.menuBtn} onClick={openFavoritesPage}>
                Favorites
              </Button>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button className={style.menuBtn} onClick={openContactPage}>
                  Contact Us
                </Button>
              </Link>
            </Container>
          </Paper>

          <Container className={style.paperRight}>
            {/* Personal info form */}
            <Container
              style={
                showForm.nameMenu === false
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <AccountInfoForm toEdit={toEdit} setToEdit={setToEdit} />
            </Container>

            {/* recent orders form */}
            <Container
              style={
                showForm.recentOrders === false
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <RecentOrders orders={orders} />
            </Container>
            {/* favorites container */}
            <Container
              className={style.favoritesViewport}
              style={
                showForm.favorites === false
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <Favorites />
            </Container>
            {/* contact form */}
            {/* <Container
            style={
              showForm.contactUs === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <Typography>contact us</Typography>
          </Container> */}
          </Container>
        </div>
      )}
    </div>
  );
}
