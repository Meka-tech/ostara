import React from "react";
import "./Footer.style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Ostara Farms</h3>
        <Link className="footercontent" to="/about-us">
          About Us
        </Link>
        <br />
        <Link className="footercontent" to="/products">
          Products & Services
        </Link>
        <br />
        <Link className="footercontent" to="/sustainability">
          Sustainability
        </Link>
        <br />
        <Link className="footercontent" to="/location">
          Locations
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
