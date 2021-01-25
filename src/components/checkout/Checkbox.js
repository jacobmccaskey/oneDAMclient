import React, { useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { User } from "../../Context";

const useStyles = makeStyles((theme) => ({
  checkboxWrap: {},
  checkOutFormBtn: {
    marginBottom: theme.spacing(1),
  },
  customerForm: {
    margin: "auto",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

export default function CheckboxShipping(props) {
  const { handleClick, checked } = props;
  const styles = useStyles();
  const context = useContext(User);
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
  } = context;
  return (
    <div>
      <span style={{ color: "grey" }}>Order for pickup</span>
      <Checkbox
        inputProps={{ "aria-label": "primary checkbox" }}
        checked={checked}
        onChange={handleClick}
        color="default"
      />
      <div
        style={checked === true ? { display: "block" } : { display: "none" }}
        className={styles.customerForm}
      >
        <TextField
          fullWidth
          required
          className={styles.checkOutFormBtn}
          label="first name"
          variant="outlined"
          size="small"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          fullWidth
          className={styles.checkOutFormBtn}
          variant="outlined"
          label="last name"
          size="small"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          className={styles.checkOutFormBtn}
          fullWidth
          required
          variant="outlined"
          label="email"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
