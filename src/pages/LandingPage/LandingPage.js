import React from "react";
import "./LandingPage.css";
import Navbar from "../../Navbar";
import LandingImage from "../../assets/images/landing_page.svg";
import Typography from "@material-ui/core/Typography";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="landing-intro">
        <div className="landing-intro-content">
          <Typography variant="h1" className="title">
            We are here for you!
          </Typography>
          <Typography variant="body2" className="body">
            We show you companies now hiring and help you get to the next step in your career, specifically for Wall
            Street.
          </Typography>
          <div className="btn-group">
            <Typography variant="body1" className="buyer-btn btn">
              Sign up as a buyer
            </Typography>
            <Typography variant="body1" className="seller-btn btn">
              Sign up as a seller
            </Typography>
          </div>
        </div>
        <div className="landing-intro-image">
          <img src={LandingImage} alt="" />
        </div>
      </div>
      <div className="landing-hiw">
        <Typography variant="h2" className="title">
          How it works
        </Typography>
        <div className="user-group">
          <div className="user-container">
            <Typography variant="h2">As a buyer</Typography>
          </div>
          <div className="user-container">
            <Typography variant="h2">As a seller</Typography>
          </div>
        </div>
      </div>
      <div className="landing-faq">
        <Typography variant="h2" className="title">
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" className="body">
          A platform that gives you the most up to date information on investment banking recruiting.
        </Typography>
        <div className="user-group">
          <div className="user-container">
            <ul>
              <li>
                <Typography variant="body1" className="body">
                  Investment Banking: Valuation, Leveraged Buyouts, and Mergers and Acquisitions
                </Typography>
              </li>
            </ul>
          </div>
          <div className="user-container">
            <ul>
              <li>
                <Typography variant="body1" className="body">
                  Investment Banking: Valuation, Leveraged Buyouts, and Mergers and Acquisitions
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="landing-feedback">
        <Typography variant="h2" className="title">
          Got Feedback?
        </Typography>
        <div className="btn">Fill Out This Form!</div>
      </div>
    </div>
  );
}

export default LandingPage;
