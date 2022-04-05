import React from "react";
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
