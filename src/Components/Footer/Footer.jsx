import React from "react";
import "./Footer.style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(39, 39, 56);
  color: white;
  padding: 50px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 30px;
  margin: 20px 0px;
`;
const Links = styled.div``;

const FooterLink = styled.p`
  text-decoration: none;
  color: white;
  font-size: 16px;
  ${mobile({ fontSize: "14px" })};
`;

const Footer = () => {
  return (
    <Container>
      <Links>
        <Title>Ostara Farms</Title>
        <Link to="/about-us" className="link">
          {" "}
          <FooterLink>About Us</FooterLink>
        </Link>

        <Link className="link" to="/products">
          {" "}
          <FooterLink>Products & Services</FooterLink>
        </Link>

        <Link className="link" to="/sustainability">
          {" "}
          <FooterLink>Sustainability</FooterLink>
        </Link>

        <Link className="link" to="/location">
          <FooterLink>Locations</FooterLink>
        </Link>
      </Links>
    </Container>
  );
};

export default Footer;
