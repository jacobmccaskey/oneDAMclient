import React, { useState, useEffect } from "react";
import axios from "axios";
import authenticate, { authCheck } from "./Auth/Auth";

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
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [county, setCounty] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [phone, setPhone] = useState(null);
  const [token, setToken] = useState(null);
  const [cityFetch, setCityFetch] = useState(null);
  const [stateFetch, setStateFetch] = useState(null);
  const [guest, setGuest] = useState(true);
  const [guestId, setGuestId] = useState(null);
  const [orders, setOrders] = useState();

  //fetches location from third party api, limited to 45 requests a minute
  const getLocation = () => {
    fetch(
      "http://ip-api.com/json/?fields=status,message,country,region,city,query"
    )
      .then((res) => res.json())
      .then((data) => {
        setCityFetch(data.city);
        setStateFetch(data.region);
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
      setPassword,
      setServerResponse,
      setToken,
      setGuest,
      setAddress,
      setAddressTwo,
      setEmail,
      setPhone,
      setCounty,
      setCity,
      setPostalCode,
      setOrders,
      setState
    );
  };

  const logoutAccount = () => {
    document.cookie = "token=;max-age=0";
    setEmail("");
    setPassword("");
    setAddress("");
    setAddressTwo("");
    setCity(null);
    setState(null);
    setCounty(null);
    setPhone(null);
    setPostalCode(null);
    setAuth(null);
    setToken(null);
    setAuth(false);
    setfavorites([]);
    setCart([]);
    setGuest(true);
  };

  const addCart = (item) => {
    //declare variable for HTTP Request
    const items = [...cart, item];
    if (token === null) {
      setCart((prevState) => [...prevState, item]);
    }
    if (token === undefined) console.log("token undefined");
    if (token !== null) {
      axios({
        method: "post",
        url: process.env.REACT_APP_UPDATECART,
        headers: { "x-access-token": token },
        data: {
          items: items,
        },
      }).then((response) => setCart(response.data));
    }
  };

  const deleteCart = (item) => {
    let filteredArray = cart.filter((index) => index._id !== item._id);
    setCart(filteredArray);
    // if (token === null) {
    //   setCart(filteredArray);
    // }
    if (token !== null) {
      axios({
        method: "post",
        url: process.env.REACT_APP_UPDATECART,
        headers: { "x-access-token": token },
        data: {
          items: filteredArray,
        },
      }).then((response) => console.log(response));
    }
  };

  const addFav = (item) => {
    //stage for sending to server
    const favArray = [...favorites, item];
    //persist to state on frontend first
    // setfavorites((prevState) => [...prevState, { item }]);
    //send request to server if authentication token exists
    if (token !== null) {
      axios({
        method: "post",
        url: process.env.REACT_APP_UPDATEFAVORITES,
        headers: { "x-access-token": token },
        data: {
          items: favArray,
        },
      }).then((res) => setfavorites(res.data));
    }
  };
  const deleteFav = (item) => {
    let filteredArray = favorites.filter((index) => index._id !== item._id);
    // setfavorites(filteredArray);
    if (token !== null) {
      axios({
        method: "post",
        url: process.env.REACT_APP_UPDATEFAVORITES,
        headers: { "x-access-token": token },
        data: {
          items: filteredArray,
        },
      }).then((res) => setfavorites(res.data));
    }
  };

  const createNewUser = () => {
    axios({
      method: "post",
      url: process.env.REACT_APP_NEWUSER,
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    }).then((res) => {
      // console.log(res.data);
      setAuth(res.data.auth);
      setEmail(res.data.email);
      setAddress(res.data.address);
      setCart(res.data.cart);
      setfavorites(res.data.favorites);
      setToken(res.data.token);
      setServerResponse(res.data.status);
      document.cookie = `token=${res.data.token}`;
    });
  };

  const updateAccount = (update) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_UPDATE_USER,
      headers: {
        "x-access-token": token,
      },
      data: {
        update: update,
      },
    }).then((response) => setServerResponse(response.status));
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
      setAddress,
      setEmail,
      setAddressTwo,
      setCounty,
      setPhone,
      setPostalCode,
      setCity,
      setOrders,
      setState,
      setToken
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
        setState,
        serverResponse,
        setServerResponse,
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
        password,
        email,
        addressTwo,
        setAddressTwo,
        guest,
        setGuest,
        guestId,
        setGuestId,
        setCity,
        county,
        setCounty,
        setPostalCode,
        postalCode,
        setCityFetch,
        cityFetch,
        setStateFetch,
        stateFetch,
        phone,
        setPhone,
        orders,
        setOrders,
        updateAccount,
      }}
    >
      {children}
    </User.Provider>
  );
}
