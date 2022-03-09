import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Breadcrumb } from "react-bootstrap";
// import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import "./AboutUs.style.css";

import { MdGroups } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import { MdOutlinePeople } from "react-icons/md";
import styled from "styled-components";
import { mobile } from "../../../responsive";

const Container = styled.div``;

const Top = styled.div``;

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

const Aboutus = styled.div`
  padding: 20px;
  margin: 100px 30px;
  text-align: left;
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

const Button = styled.button`
  padding: 10px;
  background-color: rgb(16, 116, 16);
  color: white;
  font-size: 16px;
  width: fit-content;
  border: none;
  margin: 10px 0px;
  border-radius: 10px;
  ${mobile({ fontSize: "12px" })};
`;

const Mottos = styled.div`
  background-color: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 30px;
  box-shadow: 2px 2px 10px gray;
  ${mobile({ flexDirection: "column" })}
`;

const Motto = styled.div`
  margin: 20px;
`;
const MottoHeader = styled.h1`
  color: rgb(22, 18, 29);
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0px;
  ${mobile({ fontSize: "20px", margin: "10px 0px" })}
`;
const MottoContent = styled.p`
  font-size: 18px;
  ${mobile({ fontSize: "16px" })}
`;

const LearnMore = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`;

const LmContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutGroup = styled.div`
  flex: 1;
  margin: 30px 0px;
`;

const AbGroupText = styled.p`
  font-size: 16px;
  ${mobile({ fontSize: "12px" })}
`;

const AboutUs = () => {
  return (
    <Container>
      <Top>
        <NavBar />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
      </Top>
      <ImageContainer data-aos="fade-left">
        <Image src={require("../../Images/About.jpg")} alt="image of Header " />
      </ImageContainer>

      <Aboutus>
        <Header> About Us</Header>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
          tempor odio, eu laoreet ex interdum id. Vivamus fermentum luctus
          tortor, ac porttitor justo. Vestibulum bibendum dui eleifend,
          venenatis dolor nec, suscipit neque. Etiam cursus diam vitae nibh
          tempor, sit amet commodo eros consectetur. Vivamus et eros eget lacus
          auctor laoreet vel et purus.
        </Content>
      </Aboutus>
      <Mottos data-aos="fade-up">
        <Motto>
          <MottoHeader>Purpose & Vision</MottoHeader>
          <MottoContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tempus tempor odio, eu laoreet ex interdum id. Vivamus fermentum
            luctus tortor, ac porttitor justo.
          </MottoContent>
          <Button data-aos="fade-left">Read more</Button>
        </Motto>
        <Motto>
          <MottoHeader>Our Strategy</MottoHeader>
          <MottoContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tempus tempor odio, eu laoreet ex interdum id.
          </MottoContent>
          <Button data-aos="fade-left">Read more</Button>
        </Motto>
        <Motto>
          <MottoHeader>Our Values</MottoHeader>
          <MottoContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tempus tempor odio, eu laoreet ex interdum id.
          </MottoContent>
          <Button data-aos="fade-left">Read more</Button>
        </Motto>
      </Mottos>
      <LearnMore data-aos="fade-right">
        <Header>Learn More About Us</Header>
        <LmContent>
          <AboutGroup>
            <MdGroups className="abIcon" size={100} />
            <AbGroupText> Our Board</AbGroupText>
          </AboutGroup>
          <AboutGroup>
            <MdOutlinePeople className="abIcon" size={100} />
            <AbGroupText> Our Executive Committees</AbGroupText>
          </AboutGroup>
          <AboutGroup>
            <GiInjustice className="abIcon" size={100} />
            <AbGroupText> Ethics & Compliance</AbGroupText>
          </AboutGroup>
        </LmContent>
      </LearnMore>
      <Footer />
    </Container>
  );
};

export default AboutUs;
