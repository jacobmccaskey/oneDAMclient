import React, { useContext, useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import { User } from "../Context";
import { Redirect } from "react-router-dom";
import { useAlert } from "react-alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://onedamproject.co/">
        oneDam Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: "grey",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    // display: "absolute",
    // width: "50%",
    // height: "20%",
    // zIndex: 1000,
    // textAlign: "center",
    // boxShadow: "10px",
    backgroundColor: "white",
    // marginTop: "30%",
    // marginLeft: "10rem",
  },
}));

export default function SignUp() {
  const context = useContext(User);
  const classes = useStyles();
  const [passwordTwo, setPasswordTwo] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);
  const [formError, setFormError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const alert = useAlert();

  function checkForWhiteSpace(str) {
    if (/\s/.test(str)) {
      return true;
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = context;
    const passwordCheck = checkForWhiteSpace(password);
    if (passwordCheck === true) {
      return alert.show("password must not have any spaces in it");
    }
    if (
      email !== undefined &&
      password !== undefined &&
      passwordCheck === false
    ) {
      context.createNewUser();
      setRedirect(true);
    }
  };

  const handleModalClose = () => {
    setFormError(false);
  };

  useEffect(() => {
    const { password, firstName, lastName } = context;
    passwordTwo === password &&
    firstName.length !== 0 &&
    lastName.length !== 0 &&
    password.length > 5
      ? setDisableBtn(false)
      : setDisableBtn(true);
  }, [context, passwordTwo]);

  return (
    <React.Fragment>
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <React.Fragment>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={(e) => handleSubmit(e)}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={(e) => context.setFirstName(e.target.value)}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={context.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={(e) => context.setLastName(e.target.value)}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      value={context.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => context.setEmail(e.target.value)}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={context.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => context.setPassword(e.target.value)}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={context.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setPasswordTwo(e.target.value)}
                      style={
                        passwordTwo !== context.password
                          ? { border: "red" }
                          : { border: "green" }
                      }
                      required
                      fullWidth
                      name="passwordTwo"
                      label="Confirm Password"
                      type="password"
                      id="passwordTwo"
                      autoComplete="current-password"
                      value={passwordTwo}
                      // value={context.password}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid> */}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={disableBtn}
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
          <div style={{ textAlign: "center" }}>
            <Modal
              open={formError}
              style={{ outline: 0 }}
              onClose={handleModalClose}
            >
              <div className={classes.modal}>
                It looks like there was an error on your form. Please make sure
                the email, password, and name were inputted correctly.{" "}
              </div>
            </Modal>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
