import React from "react";
import SignInModal from "../components/SignInModal";
import WelcomeModal from "../components/WelcomeModal";
import Logo from "../assets/images/logo.svg";
import "./Navbar.css";

function Navbar() {
  const [openSignInModal, setSignInModalOpen] = React.useState(false);
  const [openWelcomeModal, setWelcomeModalOpen] = React.useState(false);

  const handleSignInModalOpen = () => {
    setSignInModalOpen(true);
  };

  const handleSignInModalClose = () => {
    setSignInModalOpen(false);
  };

  const handleWelcomeModalOpen = () => {
    setWelcomeModalOpen(true);
  };

  const handleWelcomeModalClose = () => {
    setWelcomeModalOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" height="38" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link h5 fw-bold">Companies Hiring</a>
            </li>
            <li className="nav-item">
              <a className="nav-link h5 fw-bold">Resources</a>
            </li>
            <li onClick={handleSignInModalOpen} className="nav-item">
              <a className="nav-link h5">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-outline-btn">Sign up</a>
            </li>
          </ul>
        </div>
        <SignInModal open={openSignInModal} handleClose={handleSignInModalClose} onSuccess={handleWelcomeModalOpen} />
        <WelcomeModal open={openWelcomeModal} handleClose={handleWelcomeModalClose} />
      </div>
    </nav>
  );
}

export default Navbar;
