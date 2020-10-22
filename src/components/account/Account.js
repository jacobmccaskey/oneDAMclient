import React, { useContext } from "react";
import { User } from "../../Context";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(4),
  },
  paper: {
    flex: 1,
  },
}));

export default function Account() {
  const style = useStyles();
  const context = useContext(User);
  const {
    favorites,
    deviceType,
    deleteFav,
    logoutAccount,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    setAddressTwo,
    addressTwo,
    auth,
    email,
    setEmail,
    city,
    state,
    postalCode,
    county,
    setCity,
    setState,
    setPostalCode,
    setCounty,
  } = context;
  return (
    <div>
      <Typography variant="h4">Account</Typography>
      <div className={style.root}>
        <Paper className={style.paper}>
          <Typography>
            {firstName} {lastName}
          </Typography>
        </Paper>
        <Paper className={style.paper}>
          <Typography>shipping details</Typography>
        </Paper>
      </div>
    </div>
  );
}
