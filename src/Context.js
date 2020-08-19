import React, { useState, useEffect } from "react";
import axios from "axios";
import authenticate, { authCheck } from "./Auth/Auth";
// import PropTypes from "prop-types";

export const User = React.createContext();

export default function StateManager({ children }) {
  const [store, setStore] = useState([]);
  const [favorites, setfavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = (value) => {
    setEmail(value);
  };
  const passwordInput = (value) => {
    setPassword(value);
  };

  const userAuth = () => {
    authenticate(email, password, setAuth);
  };

  const logoutAccount = () => {
    const keys = ["cart", "email", "name", "auth", "token", "address"];
    keys.forEach((item) => localStorage.removeItem(item));
    setAuth(false);
    setfavorites([]);
    setCart([]);
  };

  const addCart = (item) => {
    setCart([...cart, { item }]);
  };

  const deleteCart = (item) => {
    console.log(item._id);
    let filteredArray = cart.filter((index) => index.item._id !== item._id);
    setCart(filteredArray);
  };

  const addFav = (item) => {
    setfavorites([...favorites, { favorite: item }]);
  };
  const deleteFav = (item) => {
    let filteredArray = favorites.filter(
      (index) => index.favorite._id !== item._id
    );
    setfavorites(filteredArray);
  };

  const fetchShop = () => {
    axios
      .get("http://localhost:4545/api/store")
      .then((response) => setStore(response.data));
  };

  useEffect(() => {
    fetchShop();
  }, []);
  useEffect(() => {
    authCheck(setAuth);
  }, []);

  return (
    <User.Provider
      value={{
        favorites,
        cart,
        addFav,
        deleteFav,
        addCart,
        deleteCart,
        store,
        auth,
        userAuth,
        emailInput,
        passwordInput,
        logoutAccount,
      }}
    >
      {children}
    </User.Provider>
  );
}
