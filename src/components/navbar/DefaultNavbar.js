import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "triline",
    fontSize: "45px",
    marginLeft: "2rem",
    display: "inline",
    float: "left",
  },

  textDecoNone: {
    textDecoration: "none",
  },

  btnText: {
    fontFamily: "one-dam-bold",
    fontSize: "25px",
    textDecoration: "none",
    textTransform: "none",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    height: "100%",
    borderRadius: "0px",
    transition: "1s",
    "&:hover": {
      color: "rgb(255,228,196)",
      backgroundColor: "rgb(27,27,27)",
    },
  },

  btnGroup: {
    textAlign: "center",
    display: "inline",
    verticalAlign: "middle",
  },

  accountBtnGroup: {
    float: "right",
    marginRight: "1rem",
    height: "100%",
  },
  accountBtn: {
    height: "100%",
    verticalAlign: "middle",
  },

  appBar: {
    backgroundColor: "rgb(152,118,84)",
    textAlign: "center",
    display: "inline",
    color: "black",
    height: "4rem",
    width: "100%",
  },
}));

export default function DefaultNavbar() {
  const styles = useStyles();
  return (
    <div>
      <AppBar className={styles.appBar}>
        <Typography className={styles.header}>oneDAM</Typography>
        <div className={styles.btnGroup}>
          <Link to="/" className={styles.textDecoNone}>
            <Button className={styles.btnText}>home</Button>
          </Link>

          <Link to="/shop" className={styles.textDecoNone}>
            <Button className={styles.btnText}>shop </Button>
          </Link>
          <Link to="/blueprint" className={styles.textDecoNone}>
            <Button className={styles.btnText}>blueprint</Button>
          </Link>
          <Link to="/impact" style={{ textDecoration: "none" }}>
            <Button className={styles.btnText}>impact</Button>
          </Link>
        </div>
        <div className={styles.accountBtnGroup}>
          <Link to="/account/view" className={styles.textDecoNone}>
            <Button className={styles.accountBtn}>
              <AccountBoxIcon />
            </Button>
          </Link>

          <Link to="/checkout" className={styles.textDecoNone}>
            <Button className={styles.accountBtn}>
              <ShoppingCartIcon />
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}
