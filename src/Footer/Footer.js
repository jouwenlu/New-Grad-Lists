import React from "react";
import Logo from "../assets/images/logo.svg";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <img src={Logo} alt="logo" className="footer-logo" />
        </div>
        <div className="row d-flex">
          <ul className="col-md-9 d-flex">
            <li>
              <p>Companies Hiring</p>
            </li>
            <li>
              <p>Resources</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
          <ul className="col-md-3 d-flex justify-content-center">
            <li>
              <FacebookIcon className="footer-social-icon" />
            </li>
            <li>
              <LinkedInIcon className="footer-social-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
