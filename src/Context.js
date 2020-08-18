import React from "react";
import PropTypes from "prop-types";

export const UserAuthContext = React.createContext({
  auth: false,
  userAuth: () => {},
});

export const User = React.createContext({
  list: [],
  cart: [],
  addFav: () => {},
  deleteFav: () => {},
});

export const Cart = React.createContext({
  list: [],
  addItem: () => {},
  deleteItem: () => {},
});

User.propTypes = {
  list: PropTypes.array,
  cart: PropTypes.array,
  addFav: PropTypes.func,
  deleteFav: PropTypes.func,
};
