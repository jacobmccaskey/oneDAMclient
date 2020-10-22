import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { User } from "../../Context";

export default function Geolocator() {
  const context = useContext(User);

  return (
    <React.Fragment>
      <Typography style={{ color: "grey", fontSize: "small" }}>
        {context.cityFetch}, {context.stateFetch}
      </Typography>
    </React.Fragment>
  );
}
