import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Ostara Farms</h3>
        <p>About Us</p>
        <p>Products & Services</p>
        <p>Sustainability</p>
        <p>Locations</p>
      </div>
      <div>
        <p>
          Privacy Policy | Cookie Policy | Terms of Use |Feedback | Contact Us
        </p>
      </div>
    </footer>
  );
};

export default Footer;
