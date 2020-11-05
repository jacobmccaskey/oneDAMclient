import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { User } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "grey",
    fontSize: "small",
    display: "block",
    margin: 0,
    padding: 0,
  },
}));

export default function Geolocator() {
  const style = useStyles();
  const context = useContext(User);

  return (
    <div className={style.text}>
      <Typography>
        {context.firstName} | {context.cityFetch}, {context.stateFetch}
      </Typography>
    </div>
  );
}
