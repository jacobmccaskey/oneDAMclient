import axios from "axios";

//for sending x-www-urlencoded data
const encodeFormData = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

//returns value of cookie if exists, returns null if does not exist
function getCookie(name) {
  var cookieArr = document.cookie.split(";");

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}

//checks if valid token exist to validate user and fetch information from server
export function authCheck(
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
) {
  const token = getCookie("one-dam-token");

  if (token !== null) {
    axios
      .get(process.env.REACT_APP_USER, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setAuth(res.data.auth);
        //fetches from db and persists to app's state
        if (res.data.status === 200) {
          // console.log(res.data);
          setCart(res.data.cart);
          setfavorites(res.data.favorites);
          setServerResponse(200);
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setAddress(res.data.address);
          setEmail(res.data.email);
          setAddressTwo(res.data.addressTwo);
          setCounty(res.data.county);
          setPhone(res.data.phone);
          setPostalCode(res.data.postalCode);
          setCity(res.data.city);
          setOrders(res.data.orders);
          setState(res.data.state);
          setGuest(res.data.guest_bool);
          setGuestId(res.data.guestId);
          setToken(token);
        }
      });
  }
}

//used for logging in, set hooks to populate rest of app pages
export default function authenticate(
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
) {
  let body = {
    email: email,
    password: password,
  };

  let expiry = new Date(
    //sets time cookie to expire in clients browser
    new Date().getTime() + 60 * 60 * 24 * 1000
  ).toUTCString();

  fetch("http://localhost:4545/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: encodeFormData(body),
  })
    .then((response) => response.json())
    .then((data) => {
      switch (data.status) {
        case 404:
          setAuth(false);
          setServerResponse(404);
          setPassword("");
          setGuest(true);
          alert.show("We could not find a user with this email");
          setBadEmail(true);
          break;
        case 401:
          setAuth(false);
          setServerResponse(401);
          setGuest(true);
          setGuestId(data.guestId);
          setBadPassword(true);
          break;
        case 200:
          setAuth(data.auth);
          setServerResponse(200);
          setfavorites(data.favorites);
          setCart(data.cart);
          setEmail("");
          setPassword("");
          setGuest(false);
          setToken(data.token);
          setAddress(data.address);
          setAddressTwo(data.addressTwo);
          setEmail(data.email);
          setPhone(data.phone);
          setCounty(data.county);
          setCity(data.city);
          setPostalCode(data.postalCode);
          setOrders(data.orders);
          setState(data.state);
          setGuest(false);
          setGuestId(null);
          document.cookie = `one-dam-token=${data.token};expires=${expiry}`;
          break;
        default:
          setAuth(false);
          setServerResponse(404);
          break;
      }
    });
}
