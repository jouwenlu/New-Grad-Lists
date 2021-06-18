import React from "react";
import "./LandingPage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import LandingImage from "../../assets/images/landing_page.jpg";
import Typography from "@material-ui/core/Typography";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-intro my-5 container-lg">
        <div className="container-lg">
          <h1 className="title">We are here for you!</h1>
          <h6 className="body">
            We show you companies now hiring and help you get to the next step in your career, specifically for Wall
            Street.
          </h6>
          <div className="mt-5 d-flex justify-content-between">
            <button type="button" className="buyer-btn btn me-auto px-5 py-2">
              Sign up as a buyer
            </button>
            <button type="button" className="seller-btn btn m-auto px-5 py-2">
              Sign up as a seller
            </button>
          </div>
        </div>
        <div className="container-lg d-none d-lg-block">
          <img src={LandingImage} className="img-fluid" alt="" />
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
      <Footer />
    </div>
  );
}

export default LandingPage;
