import React, { useState } from "react";
import authenticate from "../../../Auth/Auth";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SignInForm from "./SignInForm";
import Account from "./Account";
import { UserAuthContext } from "../../../Context";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AccountModal(props) {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = () => {
    authenticate(email, password);
    auth === false ? setAuth(true) : setAuth(false);
  };

  return (
    <div>
      <UserAuthContext.Provider
        value={{
          auth,
          userAuth,
        }}
      >
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={props.accountModal}
          onClose={props.closeModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={props.accountModal}>
            {auth === false ? (
              <SignInForm
                login={userAuth}
                setEmail={setEmail}
                setPassword={setPassword}
                password={password}
                email={email}
              />
            ) : (
              <Account logout={userAuth} />
            )}
          </Fade>
        </Modal>
      </UserAuthContext.Provider>
    </div>
  );
}
