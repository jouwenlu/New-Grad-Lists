import React from "react";
import SignInModal from "../components/SignInModal";
import "./Navbar.css";

function Navbar() {
  const [openModal, setModalOpen] = React.useState(true);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
              <div href="" onClick={handleModalOpen}>Login</div>
            </li>
            <li>
              <div href="">Sign up</div>
            </li>
          </ul>
        </nav>
      </div>
      <SignInModal open={openModal} handleClose={handleModalClose}/>
    </div>
  );
}

export default Navbar;
