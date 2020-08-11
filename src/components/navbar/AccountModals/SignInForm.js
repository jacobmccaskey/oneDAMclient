import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignInForm(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.paper}>
        <h2>oneDAM account</h2>
        <TextField
          required
          id="standard-required"
          label="username"
          type="text"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => props.setEmail(e.target.value)}
          value={props.email}
        />
        <TextField
          required
          id="standard-password-input"
          type="password"
          label="Password"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => props.setPassword(e.target.value)}
          value={props.password}
        />
        <Button label="Sign In" onClick={() => props.login()}>
          Sign In
        </Button>
      </div>
    </React.Fragment>
  );
}
