import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function Account(props) {
  const classes = useStyles;
  return (
    <div className={classes.paper} style={{ backgroundColor: "white" }}>
      <Typography>Works</Typography>
      <Button onClick={() => props.logout()}>Logout</Button>
    </div>
  );
}
