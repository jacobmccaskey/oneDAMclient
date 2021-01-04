import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  niceColors: {
    background: "-webkit-linear-gradient(right,pink, blue)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  btn: {
    margin: "1rem",
    width: "40%",
    fontSize: "16px",
    background: "-webkit-linear-gradient(right,pink, blue)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    textTransform: "none",
    transition: "0.5s",
    "&:hover": {
      background: "-webkit-linear-gradient(right,blue, pink)",
      padding: "1rem",
    },
  },
  root: {
    paddingTop: "5rem",
    margin: theme.spacing(3),
    width: "60%",
    display: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  innerMagic: {
    textAlign: "left",
  },
  backBtn: {
    textAlign: "left",
    marginBottom: theme.spacing(1),
  },
}));

export default function Contact() {
  const style = useStyles();
  return (
    <div className={style.root}>
      <div className={style.backBtn}>
        <Link to="/account/default" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="small">
            <Typography>back to account</Typography>
          </Button>
        </Link>
      </div>
      <div className={style.innerMagic}>
        <Typography variant="h4">support</Typography>
        <hr />
        <Typography>
          We take your questions and concerns very seriously. If you would like
          to contact us, are interested in becoming a{" "}
          <span className={style.niceColors}>oneDAM approved vendor</span>, or
          have question about your order, click on the button below or call us
          at <i>###-###-####</i>
        </Typography>
        <a
          href="mailto:mccaskey316@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <Button className={style.btn}>contact us</Button>
        </a>
      </div>
    </div>
  );
}
