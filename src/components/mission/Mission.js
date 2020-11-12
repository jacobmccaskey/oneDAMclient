import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  videoContainer: {
    width: "100%",
    height: "1000px",
  },
}));

export default function Mission() {
  const style = useStyles();
  return (
    <div>
      <div className={style.videoContainer}>
        <video autoPlay muted loop id="oneDAM video">
          <source src="https://youtu.be/W5OYrwMvwBQ" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
