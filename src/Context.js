import React, { useState, useEffect } from "react";
import axios from "axios";
import authenticate from "./Auth/Auth";
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
    authenticate(email, password);
    auth === false ? setAuth(true) : setAuth(false);
  };

  const addCart = (item) => {
    cart.length === 0 ? setCart([{ item }]) : setCart([...cart, { item }]);
  };

  const deleteCart = (item) => {
    let filteredArray = cart.filter((items) => items !== item);
    setCart(filteredArray);
  };

  const addFav = (itemId) => {
    favorites.length === 0
      ? setfavorites([{ id: itemId }])
      : setfavorites([...favorites, { id: itemId }]);
  };
  const deleteFav = (itemId) => {
    let filteredArray = favorites.filter((items) => items.id !== itemId);
    setfavorites(filteredArray);
  };

  const fetchData = () => {
    axios
      .get("http://localhost:4545/api/store")
      .then((response) => setStore(response.data));
  };

  useEffect(() => {
    fetchData();
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
      }}
    >
      {children}
    </User.Provider>
  );
}
