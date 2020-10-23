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

export function authCheck(
  setAuth,
  setCart,
  setfavorites,
  setServerResponse,
  setFirstName,
  setLastName,
  setAddress,
  setEmail,
  setToken
) {
  const token = getCookie("token");
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
  setEmail,
  setPassword,
  setServerResponse,
  setToken,
  setGuest
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
          setGuest(false);
          setToken(data.token);
          document.cookie = `token=${data.token};expires=${expiry}`;
          break;
        default:
          setAuth(false);
          setServerResponse(404);
          break;
      }
    });
}
