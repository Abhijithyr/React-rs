import React from "react";
import "./Footer.css";
import Logo1 from '../Component/Images/newlogo.webp';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'; 

const Footer = () => {
 

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-info">
          <img src={Logo1} alt="Company Logo" className="footer-logo" loading="lazy" />
          <p className="footer-description">
            R S Construction - You dream it, we will build it. Building your dreams with precision.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/packages">Packages</a>
          <a href="/costestimator">Cost Estimator</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone:<span className="footer_no_span"> +91 9916477467</span></p>
          <p>Email: rsconstruction.kar@gmail.com</p>
          <p>Address: Kengeri, Bengaluru, Karnataka-<span className="footer_no_span">560060,</span> India</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" rel="noreferrer"><FacebookOutlined /></a>
          <a href="https://twitter.com" rel="noreferrer"><TwitterOutlined /></a>
          <a href="https://instagram.com" rel="noreferrer"><InstagramOutlined /></a>
          <a href="https://linkedin.com" rel="noreferrer"><LinkedinOutlined /></a>         

          {/* <div className="footer_web_counter">
            <a href="https://www.hitwebcounter.com">
            <img src="https://hitwebcounter.com/counter/counter.php?page=16868024&style=0030&nbdigits=5&type=ip&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a>   
          </div> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; <span className="fotter_span">2024</span> R S Construction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
