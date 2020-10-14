import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop.js";
import Account from "./components/account/Account";
import Members from "./components/members/Member";
import Mission from "./components/mission/Mission";
import Contact from "./components/contact/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import StateManager from "./Context";
import Footer from "./components/Footer";
const Checkout = React.lazy(() => import("./components/checkout/Main"));

function App() {
  return (
    <Router>
      <StateManager>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/shop" component={Shop} />

            <Route path="/misson" component={Mission} />

            <Route path="/members" component={Members} />

            <Route path="/account" component={Account} />

            <Route path="/contact" component={Contact} />

            <Route path="/signup" component={SignUp} />

            <Route path="/signin" component={SignIn} />

            <Route
              path="/checkout"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Checkout />
                </Suspense>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </StateManager>
    </Router>
  );
}

export default App;
