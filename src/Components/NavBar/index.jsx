import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { ReactComponent as ReactLogo } from "../Images/Logo.svg";
import { FaBars } from "react-icons/fa";

import "./NavBar.style.css";
import { Link } from "react-router-dom";
import {
  NavLogo,
  NavbarContainer,
  Nav,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Logo,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  return (
    // <Navbar className="mt-3" collapseOnSelect expand="lg" variant="light">
    //   <Container>
    //     <Link to="/">
    //       {" "}
    //       <img className="logo" src={require("../Images/Logo.png")} />
    //       {/* <ReactLogo className="logo" /> */}
    //     </Link>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="mx-auto" fill="true">
    //         <Link className="px-5 mw-100 text-decoration-none" to="/about-us">
    //           <h4>About Us</h4>
    //         </Link>
    //         <Link className="px-5 mw-100 text-decoration-none" to="/products">
    //           <h4>Products & Services</h4>
    //         </Link>
    //         <Link
    //           className="px-5 mw-100 text-decoration-none"
    //           to="/sustainability"
    //         >
    //           <h4>Sustainabilty</h4>
    //         </Link>
    //         <Link className="px-5 mw-100 text-decoration-none" to="/location">
    //           <h4> Locations </h4>
    //         </Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link to="/">
            <Logo className="logo" src={require("../Images/Logo.png")} />
          </Link>
        </NavLogo>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              {" "}
              <NavLinks> About Us </NavLinks>{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/products" style={{ textDecoration: "none" }}>
              {" "}
              <NavLinks> Products & Services </NavLinks>{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/sustainability" style={{ textDecoration: "none" }}>
              {" "}
              <NavLinks> Sustainability </NavLinks>{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/location" style={{ textDecoration: "none" }}>
              {" "}
              <NavLinks> Location </NavLinks>{" "}
            </Link>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
