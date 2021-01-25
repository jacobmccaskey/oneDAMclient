import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import moment from "moment";

import TextField from "@material-ui/core/TextField";
import { useAlert } from "react-alert";

export default function NewSubscriber(props) {
  const { showSubscribe } = props;
  const [email, setEmail] = useState("");
  const alert = useAlert();
  const USER_ID = process.env.REACT_APP_EMAILJS_ID;
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = "template_vx414xh";

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      user_email: email,
      reply_to: process.env.REACT_APP_ADMIN_EMAIL,
      date: moment.utc(),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      function (response) {
        alert.show("thanks for subscribing");
        showSubscribe(false);
        setEmail("");
      },
      function (error) {
        alert.show("looks like there was an error on our end");
      }
    );
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          required
          id="outlined"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
      </form>
    </div>
  );
}
