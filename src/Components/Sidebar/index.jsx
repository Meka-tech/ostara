import React from "react";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link to="/" style={{ textDecoration: "none" }} onClick={toggle}>
            <SidebarLink> Home</SidebarLink>{" "}
          </Link>
          <Link
            to="/about-us"
            style={{ textDecoration: "none" }}
            onClick={toggle}
          >
            <SidebarLink> About Us</SidebarLink>{" "}
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none" }}
            onClick={toggle}
          >
            <SidebarLink> Products & Services</SidebarLink>{" "}
          </Link>
          <Link
            to="/sustainability"
            style={{ textDecoration: "none" }}
            onClick={toggle}
          >
            <SidebarLink> Sustainability</SidebarLink>{" "}
          </Link>
          <Link
            to="/location"
            style={{ textDecoration: "none" }}
            onClick={toggle}
          >
            <SidebarLink> Location</SidebarLink>{" "}
          </Link>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
