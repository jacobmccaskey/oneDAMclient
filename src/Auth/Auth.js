import axios from "axios";

//for sending x-www-urlencoded data
const encodeFormData = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export function authCheck(setAuth) {
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
        console.log(res);
        setAuth(res.data.auth);
      });
  }
}

export default function authenticate(email, password, setAuth) {
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
      setAuth(data.auth);
      console.log(data);
      let dataAsArray = Object.entries(data);
      dataAsArray.forEach((element) => {
        localStorage.setItem(`${element[0]}`, element[1]);
      });
    });
}
