//for sending x-www-urlencoded data
const encodeFormData = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function authenticate(email, password) {
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
      let dataAsArray = Object.entries(data);
      dataAsArray.forEach((element) => {
        localStorage.setItem(`${element[0]}`, element[1]);
      });
    });
}
