import React, { useState, useEffect } from "react";
import axios from "axios";
import authenticate, { authCheck } from "./Auth/Auth";
import { useAlert } from "react-alert";

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
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState(null);
  const [cityFetch, setCityFetch] = useState(null);
  const [stateFetch, setStateFetch] = useState(null);
  const [guest, setGuest] = useState(true);
  const [guestId, setGuestId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [missingInfo, setMissingInfo] = useState(false);

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
  //for activating modals on whole website // alert.show()
  const alert = useAlert();

  const userAuth = () => {
    setBadPassword(false);
    setBadEmail(false);
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
      setGuestId,
      setAddress,
      setAddressTwo,
      setEmail,
      setPhone,
      setCounty,
      setCity,
      setPostalCode,
      setOrders,
      setState,
      alert,
      setBadEmail,
      setBadPassword
    );
  };

  const logoutAccount = () => {
    document.cookie = "one-dam-token=;Expires/Max-Age=0";
    setEmail("");
    setPassword("");
    setAddress("");
    setAddressTwo("");
    setCity("");
    setState("");
    setCounty("");
    setPhone("");
    setPostalCode("");
    setAuth(null);
    setToken(null);
    setAuth(false);
    setfavorites([]);
    setCart([]);
    setGuest(true);
    window.location.reload();
    return false;
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
    if (token === null) return setfavorites(favArray);
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
    const userFirstName = firstName.trim();
    const userLastName = lastName.trim();
    const userEmail = email.trim();
    axios({
      method: "post",
      url: process.env.REACT_APP_NEWUSER,
      data: {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: password,
      },
    }).then((res) => {
      setAuth(res.data.auth);
      setEmail(res.data.email);
      setAddress(res.data.address);
      setCart(res.data.cart);
      setfavorites(res.data.favorites);
      setToken(res.data.token);
      setServerResponse(res.data.status);
      document.cookie = `one-dam-token=${res.data.token}`;
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
  //fetches current inventory from database, limit to 50 items at a time
  const fetchShop = () => {
    axios.get(process.env.REACT_APP_STORE).then((response) => {
      console.log(response.data);
      setStore(response.data);
    });
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
      setToken,
      setGuest,
      setGuestId
    );
  }, []);
  useEffect(() => {
    if (location === false) getLocation();
  }, [location]);

  useEffect(() => {
    if (address === "" || !city || !county || !state || !postalCode || !phone) {
      setMissingInfo(true);
    } else setMissingInfo(false);
  }, [address, city, county, phone, postalCode, state]);

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
        setBadEmail,
        setBadPassword,
        badPassword,
        badEmail,
        missingInfo,
      }}
    >
      {children}
    </User.Provider>
  );
}
