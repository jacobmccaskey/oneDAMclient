import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
          <div className={classes.paper}>
            <h2>Sign In</h2>
            <TextField
              required
              id="standard-required"
              label="username"
              type="text"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              required
              id="standard-password-input"
              type="password"
              label="Password"
              InputLabelProps={{ shrink: true }}
            />
            <Button label="Sign In">Sign In</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
