import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Ostara Farms</h3>
        <p className="footercontent">About Us</p>
        <p className="footercontent">Products & Services</p>
        <p className="footercontent">Sustainability</p>
        <p className="footercontent">Locations</p>
      </div>
      <div>
        <p className="footercontent">
          Privacy Policy | Cookie Policy | Terms of Use |Feedback | Contact Us
        </p>
      </div>
    </footer>
  );
};

export default Footer;
