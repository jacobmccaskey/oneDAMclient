import React, { useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { User } from "../../Context";

export default function Geolocator() {
  const context = useContext(User);
  // const [location, setLocation] = useState(false);
  // const [city, setCity] = useState(null);
  // const [state, setState] = useState(null);

  // //fetches location from third party api, limited to 45 requests a minute
  // const getLocation = () => {
  //   fetch(
  //     "http://ip-api.com/json/?fields=status,message,country,region,city,query"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCity(data.city);
  //       setState(data.region);
  //       setLocation(true);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   if (location === false) getLocation();
  // }, [location]);

  return (
    <React.Fragment>
      <Typography style={{ color: "grey", fontSize: "small" }}>
        {context.city}, {context.state}
      </Typography>
    </React.Fragment>
  );
}
