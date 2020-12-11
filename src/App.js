import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MobileNavbar from "./components/navbar/MobileNavBar";
import DefaultNavbar from "./components/navbar/DefaultNavbar";
import FallBack from "./components/fallbackElement";
import Shop from "./components/shop/Shop.js";
import Account from "./components/account/Account";
import Members from "./components/members/Member";
import Contact from "./components/contact/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import StateManager from "./Context";
import Footer from "./components/Footer";
import Impact from "./components/Impact";
import ModalProvider from "./components/ModalProvider";
import ScrollRestore from "./components/ScrollRestore";
const Blueprint = React.lazy(() => import("./components/Blueprint/Blueprint"));
const Home = React.lazy(() => import("./components/home/Home"));
const Mission = React.lazy(() => import("./components/mission/Mission"));
const PaymentSuccess = React.lazy(() =>
  import("./components/checkout/PaymentSuccess")
);
const Checkout = React.lazy(() => import("./components/checkout/Main"));
const useStyles = makeStyles((theme) => ({
  navWrapper: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navWrapDesktop: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const styles = useStyles();
  return (
    <Router>
      <ModalProvider>
        <StateManager>
          <ScrollRestore />
          <div className={styles.navWrapper}>
            <MobileNavbar />
          </div>
          <div className={styles.navWrapDesktop}>
            <DefaultNavbar />
          </div>
          <div
            className="App"
            style={{
              position: "relative",
              minHeight: "100vh",
            }}
          >
            {/* wrapper for footer, see footer styles section for css */}
            <div style={{ paddingBottom: "15rem" }}>
              {/* ErrorModal provides Modal for any page, use serverResponse to trigger what you want to say. set hooks for each message in respective component and trigger with alert.show() */}

              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Suspense fallback={<FallBack />}>
                      <Home />
                    </Suspense>
                  )}
                />

                <Route path="/shop" component={Shop} />

                <Route
                  path="/mission"
                  render={() => (
                    <Suspense fallback={<FallBack />}>
                      <Mission />
                    </Suspense>
                  )}
                />

                <Route
                  path="/blueprint"
                  render={() => (
                    <Suspense fallback={<FallBack />}>
                      <Blueprint />
                    </Suspense>
                  )}
                />
                <Route path="/impact" render={() => <Impact />} />
                <Route path="/members" component={Members} />

                <Route path="/account/:option" component={Account} />

                <Route path="/contact" component={Contact} />

                <Route path="/signup" component={SignUp} />

                <Route path="/signin" component={SignIn} />

                <Route
                  path="/checkout"
                  render={() => (
                    <Suspense fallback={<FallBack />}>
                      <Checkout />
                    </Suspense>
                  )}
                />
                <Route
                  path="/paymentsuccess"
                  render={() => (
                    <Suspense fallback={<div>Loading...</div>}>
                      <PaymentSuccess />
                    </Suspense>
                  )}
                />
              </Switch>

              <Footer />
            </div>
          </div>
        </StateManager>
      </ModalProvider>
    </Router>
  );
}

export default App;
