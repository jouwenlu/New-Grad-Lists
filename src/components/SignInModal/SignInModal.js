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
    margin: theme.spacing(0, 0, 2),
  },
  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  paper: {
    position: "absolute",
    width: "35vw",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 5),
    outline: "none",
  },
  header: {
    fontSize: "33px",
    fontWeight: "bold",
  },
  body: {
    padding: theme.spacing(2, 0, 2),
  },
  signUpBtn: {
    backgroundColor: theme.palette.yellow1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1.5, 0, 1.5),
    borderRadius: "9px",
    margin: theme.spacing(3, 0, 3),
    "&:hover": {
      cursor: "pointer",
    },
  },
  signUpBody: {
    flex: "7",
    fontSize: "18px",
  },
  signInBody: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    color: theme.palette.blue5,
    width: "20px",
    height: "20px",
    flex: "3",
  },
  logInSpan: {
    fontWeight: "bold",
    margin: theme.spacing(0, 1, 0),
    padding: theme.spacing(0, 0, 0.25),
    borderBottom: `4px solid ${theme.palette.yellow1}`,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function SignInModal({ open, handleOpen, handleClose }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, currentUser } = useAuth();

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.closeIconContainer}>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
      </div>
      <Typography variant="h1" className={classes.header} id="simple-modal-title">
        Welcome to
      </Typography>
      <Typography variant="h1" className={classes.header} id="simple-modal-title">
        NowHyring!
      </Typography>
      <Typography variant="body1" className={classes.body} id="simple-modal-description">
        integer posuere erat a ante venenatis dapibus posuere velit aliquet
      </Typography>
      <div className={classes.signUpBtn} onClick={handleGoogleSignin}>
        <img alt="google" className={classes.icon} src={GoogleIcon} />
        <Typography variant="body1" className={classes.signUpBody} id="simple-modal-title">
          Sign up with Google
        </Typography>
      </div>
      <Typography variant="body2" className={classes.signInBody}>
        Already have an account?
        <span className={classes.logInSpan} onClick={handleGoogleSignin}>
          Login with Google
        </span>
      </Typography>
    </div>
  );

  return (
    <div>
      <Typography variant="h1" id="simple-modal-title">
        {currentUser?.displayName}
      </Typography>
      <Typography variant="h2" id="simple-modal-description">
        {currentUser?.email}
      </Typography>
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
