import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ReactComponent as ReactLogo } from "../Images/Logo.svg";
import "./NavBar.style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="mt-3" collapseOnSelect expand="lg" variant="light">
      <Container>
        <Link to="/">
          {" "}
          <img className="logo" src={require("../Images/Logo.png")} />
          {/* <ReactLogo className="logo" /> */}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" fill="true">
            <Link className="px-5 mw-100 text-decoration-none" to="/about-us">
              <h4>About Us</h4>
            </Link>
            <Link className="px-5 mw-100 text-decoration-none" to="/products">
              <h4>Products & Services</h4>
            </Link>
            <Link
              className="px-5 mw-100 text-decoration-none"
              to="/sustainability"
            >
              <h4>Sustainabilty</h4>
            </Link>
            <Link className="px-5 mw-100 text-decoration-none" to="/location">
              <h4> Locations </h4>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
