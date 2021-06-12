import React from "react";
import SignInModal from "../components/SignInModal";
import WelcomeModal from "../components/WelcomeModal";
import Typography from "@material-ui/core/Typography";
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
    <div className="nav-container">
      <div className="wrapper">
        <nav>
          <img src={Logo} alt="logo" className="nav-logo" />
          <ul className="nav-items">
            <li>
              <Typography variant="body1" className="bold">
                Companies Hiring
              </Typography>
            </li>
            <li>
              <Typography variant="body1" className="bold">
                Resources
              </Typography>
            </li>
            <li>
              <Typography variant="body1" onClick={handleSignInModalOpen}>
                Login
              </Typography>
            </li>
            <li>
              <Typography variant="body1" className="nav-outline-btn">
                Sign up
              </Typography>
            </li>
          </ul>
        </nav>
      </div>
      <SignInModal open={openSignInModal} handleClose={handleSignInModalClose} onSuccess={handleWelcomeModalOpen} />
      <WelcomeModal open={openWelcomeModal} handleClose={handleWelcomeModalClose} />
    </div>
  );
}

export default Navbar;
