import React from "react";
import "./LandingPage.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import LandingImage from "../../assets/images/landing_page.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-intro container-lg">
        <div className="container-fluid">
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
        <div className="container-fluid d-none d-lg-block">
          <img src={LandingImage} className="mg-fluid" alt="" />
        </div>
      </div>
      <div className="landing-hiw container-lg">
        <div className="row w-100">
          <h2 className="title mb-5">How it works</h2>
        </div>
        <div className="row w-100 justify-content-between">
          <div className="user-container col-md-5 mb-3">
            <h2>As a buyer</h2>
          </div>
          <div className="user-container col-md-5">
            <h2>As a seller</h2>
          </div>
        </div>
      </div>
      <div className="landing-faq container-lg">
        <h2 className="title">Frequently Asked Questions</h2>
        <h6 className="body mt-3">
          A platform that gives you the most up to date information on investment banking recruiting.
        </h6>
        <div className="row justify-content-between">
          <div className="faq-list col-md-5 py-4 px-3 mb-3">
            <ul>
              <li>
                <h6 className="body">Investment Banking: Valuation, Leveraged Buyouts, and Mergers and Acquisitions</h6>
              </li>
            </ul>
          </div>
          <div className="col-md-2"></div>
          <div className="faq-list col-md-5 py-4 px-3">
            <ul>
              <li>
                <h6 className="body">Investment Banking: Valuation, Leveraged Buyouts, and Mergers and Acquisitions</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="landing-feedback container-lg">
        <h2 className="title mb-4">Got Feedback?</h2>
        <div className="btn px-5 py-2">Fill Out This Form!</div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
