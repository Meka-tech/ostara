import React, { useState } from "react";
import NavBar from "../../NavBar/index.jsx";
import { Breadcrumb } from "react-bootstrap";
import "./Sustainability.styles.css";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import Sidebar from "../../Sidebar/index.jsx";

const Container = styled.div``;

const Top = styled.div`
  text-align: left;
  padding: 20px;
  margin: 100px 40px;
`;

const ImageContainer = styled.div`
  margin-top: 0%;
  width: 100vw;
  height: 260px;
  box-shadow: 5px 5px 12px rgb(165, 164, 164);
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Header = styled.h1`
  color: rgb(22, 18, 29);
  font-size: 35px;
  font-weight: 700;
  margin: 35px 0px;
  ${mobile({ fontSize: "20px", margin: "15px 0px" })}
`;
const Content = styled.p`
  font-size: 20px;
  ${mobile({ fontSize: "16px" })}
`;
const Sustainability = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Sustainability</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <ImageContainer data-aos="fade-left">
        <Image
          src={require("../../Images/Sustainability.jpg")}
          alt="image of Header "
        />
      </ImageContainer>
      <Top>
        <Header> Sustainability</Header>

        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          efficitur ipsum sed ex consectetur, pharetra dictum enim vestibulum.
          Nullam at odio congue, luctus enim eget, pharetra tortor. Morbi
          aliquet pretium fringilla. In leo risus, tempor ut urna id, sodales
          commodo justo. Cras nec aliquam nisi.
        </Content>
      </Top>
    </Container>
  );
};

export default Sustainability;
