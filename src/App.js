import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop.js";
import Account from "./components/account/Account";
import Members from "./components/members/Member";
import Mission from "./components/mission/Mission";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/misson">
            <Mission />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
