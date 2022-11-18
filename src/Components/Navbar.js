import React from 'react';
import sitelogo from '../images/logo.png';

const Navbar = () => {
  return (
    <div>
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-5">
            <div className="topbar-left">
              <div className="topbar-social-icons">
                <a href="https://www.facebook.com/GoPureIndia" target="new">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/gopureindia" target="new">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com/gopureindia" target="new">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <p>Welcome to Go Pure - Real, Elegant, Authentic Taste of India</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-7">
            <div className="topbar-right">
              <p title="9910125804">Customer care will be open 24/7 <a href="tel:9910125804" className="company-phone"><i className="bi bi-telephone-fill"></i>+91 9910125804</a></p>
              <a href="/" className="company-timing"><i className="bi bi-clock"></i>10.00 am to 6.00 pm - (Monday to Friday)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header className="main-header">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src={sitelogo} className="img-fluid logo" alt='Logo'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about-us.html">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="taste.html">Taste</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="partners.html">Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="our-team.html">Our Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact-us.php">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
    </div>
    
  )
}

export default Navbar
