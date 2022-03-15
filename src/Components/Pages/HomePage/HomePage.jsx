import React, { useState } from "react";
import NavBar from "../../NavBar/index.jsx";
// import { Container, Row, Col, Button } from "react-bootstrap";
import "./HomePage.style.css";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { mobile } from "../../../responsive";
import { tab } from "../../../responsive";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/index.jsx";

const Container = styled.div``;

const Top = styled.div`
  display: flex;

  padding: 20px;
  margin: 30px 10px;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

const Text = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  margin: 10px 40px;
  ${tab({ flex: "4" })}
`;

const Header = styled.h1`
  color: rgb(22, 18, 29);
  font-size: 35px;
  font-weight: 700;
  margin: 35px 0px;
  ${mobile({ fontSize: "20px", margin: "15px 0px" })}
  ${tab({ fontSize: "25px", margin: "15px 0px" })}
`;

const Content = styled.p`
  font-size: 20px;
  ${mobile({ fontSize: "16px" })}
  ${tab({ fontSize: "18px" })}
`;

const Button = styled.button`
  padding: 10px 35px;
  background-color: rgb(16, 116, 16);
  color: white;
  font-size: 18px;
  width: fit-content;
  border: none;
  margin: 25px 0px;
  border-radius: 10px;
  ${mobile({ fontSize: "14px" })};
  ${tab({ fontSize: "14px" })};
  &:hover {
    background-color: rgb(16, 150, 16);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  ${mobile({ display: "none" })}
  ${tab({ display: "none" })}
`;

const Bottom = styled.div`
  text-align: left;
  padding: 20px;
  margin: 100px 40px;
`;
const Hr = styled.hr`
  display: flex;
  border: 0.5px solid rgb(16, 116, 16);
  margin: 20px 25%;
  width: 50%;
  align-self: center;
  ${mobile({ width: "70%", margin: "20px 15%" })}
  ${tab({ width: "70%", margin: "20px 15%" })}
`;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />

      <Top>
        <Text>
          <Header>
            {" "}
            Providing Food Feed and Fibre Whether it's working with rice
          </Header>
          <Content>
            {" "}
            farmers in Africa, growing cotton in Australia, or developing
            innovative ingredients in Asia, we help our customers meet
            increasing consumer demands for sustainable sourcing and healthy
            foods.
          </Content>
          <Link to="/products">
            {" "}
            <Button data-aos="fade-left">Explore</Button>{" "}
          </Link>
        </Text>
        <ImageContainer>
          <Image className="images" src={require("../../Images/corn.png")} />
        </ImageContainer>
      </Top>
      <Hr />
      <Bottom>
        <Header> Want to know more about us ?</Header>
        <Content>
          We are a leading food and agri-business, supplying food ingredients,
          feed and fibre to thousands of customers worldwide, ranging from
          multi-national organisations with world famous brands to small family
          run businesses.
        </Content>
        <Button data-aos="fade-left">More</Button>
      </Bottom>
      <Footer />
    </Container>
  );
};

export default HomePage;