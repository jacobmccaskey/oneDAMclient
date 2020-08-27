import axios from "axios";

//for sending x-www-urlencoded data
const encodeFormData = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export function authCheck(
  setAuth,
  setCart,
  setfavorites,
  setServerResponse,
  setUserData
) {
  let localAuth = window.localStorage.getItem("auth");
  let localToken = window.localStorage.getItem("token");
  if (localAuth) {
    axios
      .get(process.env.REACT_APP_USER, {
        headers: {
          "x-access-token": localToken,
        },
      })
      .then((res) => {
        setAuth(res.data.auth);
        //fetches from db and persists to app's state
        if (res.data.status === 200) {
          setCart(res.data.cart);
          setfavorites(res.data.favorites);
          setServerResponse(200);
          setUserData({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            address: res.data.address,
          });
          let dataAsArray = Object.entries(res.data);
          dataAsArray.forEach((element) =>
            localStorage.setItem(`${element[0]}`, element[1])
          );
        }
      });
  }
}

export default function authenticate(
  email,
  password,
  setAuth,
  setfavorites,
  setCart,
  setEmail,
  setPassword,
  setServerResponse
) {
  let body = {
    email: email,
    password: password,
  };
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
          break;
        case 401:
          setAuth(false);
          setServerResponse(401);
          break;
        case 200:
          setAuth(data.auth);
          setServerResponse(200);
          setfavorites(data.favorites);
          setCart(data.cart);
          setEmail("");
          setPassword("");
          let dataAsArray = Object.entries(data);
          dataAsArray.forEach((element) => {
            localStorage.setItem(`${element[0]}`, element[1]);
          });
          break;
        default:
          setAuth(false);
          setServerResponse(404);
          break;
      }
    });
}
