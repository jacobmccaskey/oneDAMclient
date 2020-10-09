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
  const [deviceType, setDevice] = useState("desktop");
  const [serverResponse, setServerResponse] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState(false);
  const [address, setAddress] = useState("");
  const [token, setToken] = useState();
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  //fetches location from third party api, limited to 45 requests a minute
  const getLocation = () => {
    fetch(
      "http://ip-api.com/json/?fields=status,message,country,region,city,query"
    )
      .then((res) => res.json())
      .then((data) => {
        setCity(data.city);
        setState(data.region);
        setLocation(true);
      })
      .catch((err) => console.error(err));
  };

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return setDevice("mobile");
    }
    return setDevice("desktop");
  };

  const emailInput = (value) => {
    setEmail(value);
  };
  const passwordInput = (value) => {
    setPassword(value);
  };

  const userAuth = () => {
    authenticate(
      email,
      password,
      setAuth,
      setfavorites,
      setCart,
      setEmail,
      setPassword,
      setServerResponse
    );
  };

  const logoutAccount = () => {
    const keys = [
      "cart",
      "email",
      "firstName",
      "lastName",
      "auth",
      "token",
      "address",
      "favorites",
      "status",
    ];
    keys.forEach((item) => localStorage.removeItem(item));
    setAuth(false);
    setfavorites([]);
    setCart([]);
  };

  const addCart = (item) => {
    setCart((prevState) => [...prevState, { item }]);
    localStorage.setItem("cart", JSON.stringify([...cart, { item }]));
  };

  const deleteCart = (item) => {
    let filteredArray = cart.filter((index) => index.item._id !== item._id);
    setCart(filteredArray);
  };

  const addFav = (item) => {
    setfavorites((prevState) => [...prevState, { item }]);
    localStorage.setItem("favorites", JSON.stringify([...favorites, { item }]));
  };
  const deleteFav = (item) => {
    let filteredArray = favorites.filter(
      (index) => index.item._id !== item._id
    );
    setfavorites(filteredArray);
  };

  const createNewUser = () => {
    axios({
      method: "post",
      url: "http://localhost:4545/api/auth/register",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    }).then((res) => {
      console.log(res.data);
      setAuth(res.data.auth);
      setEmail(res.data.email);
      setAddress(res.data.address);
      setCart(res.data.cart);
      setfavorites(res.data.favorites);
      setToken(res.data.token);
      setServerResponse(res.data.status);
      let dataAsArray = Object.entries(res.data);
      dataAsArray.forEach((element) =>
        localStorage.setItem(`${element[0]}`, element[1])
      );
    });
  };

  const fetchShop = () => {
    axios
      .get("http://localhost:4545/api/store")
      .then((response) => setStore(response.data));
  };

  useEffect(() => {
    fetchShop();
    getDeviceType();
    authCheck(
      setAuth,
      setCart,
      setfavorites,
      setServerResponse,
      setFirstName,
      setLastName,
      setAddress
    );
  }, []);
  useEffect(() => {
    if (location === false) getLocation();
  }, [location]);

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
        deviceType,
        city,
        state,
        serverResponse,
        setEmail,
        setPassword,
        createNewUser,
        setFirstName,
        setLastName,
        firstName,
        lastName,
        address,
        setAddress,
        token,
      }}
    >
      {children}
    </User.Provider>
  );
}
