import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40vw",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignInModal({ open, handleOpen, handleClose }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h1" id="simple-modal-title">Welcome to NowHyring!</Typography>
      <Typography variant="h2" id="simple-modal-description">integer posuere erat a ante venenatis dapibus posuere velit aliquet</Typography>
      <Typography>Already have an account?<div>Log in with Google</div></Typography>
    </div>
  );

  return (
    <div>
      <Typography variant="h1" id="simple-modal-title">Welcome to NowHyring!</Typography>
      <Typography variant="h2" id="simple-modal-description">integer posuere erat a ante venenatis dapibus posuere velit aliquet</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
