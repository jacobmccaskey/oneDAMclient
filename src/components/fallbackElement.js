import React from "react";
import GridLoader from "react-spinners/GridLoader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fallback: {
    position: "fixed",
    top: "40%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
  },
}));

export default function FallBack() {
  const style = useStyles();
  return (
    <div className={style.fallback}>
      <GridLoader size={30} />
    </div>
  );
}
