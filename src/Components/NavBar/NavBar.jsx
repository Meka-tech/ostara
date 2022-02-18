import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ReactComponent as ReactLogo } from "../Images/Logo.svg";
import "./NavBar.style.css";

const NavBar = () => {
  return (
    <Navbar className="mt-3" collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img className="logo" src={require("../Images/Logo.png")} />
          {/* <ReactLogo className="logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" fill="true">
            <Nav.Link className="px-5 mw-100" href="#">
              <h4>About Us</h4>
            </Nav.Link>
            <Nav.Link className="px-5 mw-100" href="#">
              <h4>Products & Services</h4>
            </Nav.Link>
            <Nav.Link className="px-5 mw-100" href="#">
              <h4>Sustainabilty</h4>
            </Nav.Link>
            <Nav.Link className="px-5 mw-100" href="#">
              <h4> Locations </h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
