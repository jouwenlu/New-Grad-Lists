import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import GoogleIcon from "../../assets/icons/google.svg";
import CloseIcon from "@material-ui/icons/Close";
import { useAuth } from "../../context/AuthContext";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  closeIconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    margin: theme.spacing(2, 0, 8),
  },
  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  paper: {
    position: "absolute",
    width: "25vw",
    minWidth: "360px",
    minHeight: "400px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 0),
    outline: "none",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: "33px",
    fontWeight: "bold",
  },
  body: {
    padding: theme.spacing(2, 0, 2),
  },
  goBtn: {
    backgroundColor: theme.palette.yellow1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1.5, 0, 1.5),
    borderRadius: "9px",
    margin: theme.spacing(5, 0, 3),
    "&:hover": {
      cursor: "pointer",
    },
  },
  goBody: {
    fontSize: "18px",
    fontWeight: "bold",
  },
}));

export default function WelcomeModal({ open, handleOpen, handleClose }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.closeIconContainer}>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
      </div>
      <Typography variant="h1" className={classes.header} id="simple-modal-title">
        Welcome!
      </Typography>
      <Typography variant="body1" className={classes.body} id="simple-modal-description">
        You are now part of the NowHyring community! Ready to get started?
      </Typography>
      <div className={classes.goBtn} onClick={handleClose}>
        <Typography variant="body1" className={classes.goBody} id="simple-modal-title">
          Let's go!
        </Typography>
      </div>
    </div>
  );

  return (
    <div>
      <Typography variant="h1" id="simple-modal-title"></Typography>
      <Typography variant="h2" id="simple-modal-description"></Typography>
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
