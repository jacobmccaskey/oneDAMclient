import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SignInForm from "./SignInForm";
import { User } from "../../../Context";

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
  const context = useContext(User);

  const authAndClose = () => {
    context.userAuth();
    props.closeModal();
  };

  return (
    <div>
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
          <SignInForm
            login={authAndClose}
            setEmail={context.emailInput}
            setPassword={context.passwordInput}
            password={context.password}
            email={context.email}
          />
        </Fade>
      </Modal>
    </div>
  );
}
