import React from "react";
import SignInModal from "../components/SignInModal";
import WelcomeModal from "../components/WelcomeModal";
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
          <div className="logo">NowHyring</div>
          <ul className="nav-items">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <div href="" onClick={handleSignInModalOpen}>
                Login
              </div>
            </li>
            <li>
              <div href="">Sign up</div>
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
