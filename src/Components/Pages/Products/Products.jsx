import React, { useState } from "react";
import NavBar from "../../NavBar/index.jsx";
import "./Products.style.css";
import { Breadcrumb } from "react-bootstrap";
import CropCard from "../../CropCard/CropCard";
// import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import { RiSeedlingLine } from "react-icons/ri";
import { GiGoat } from "react-icons/gi";
import { GiCow } from "react-icons/gi";
import { GiPig } from "react-icons/gi";
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";

import styled from "styled-components";
import { mobile } from "../../../responsive";
import { Link } from "react-router-dom";
import { tab } from "../../../responsive";
import Sidebar from "../../Sidebar/index.jsx";

const Container = styled.div``;

const Top = styled.div`
  text-align: left;
  padding: 20px;
  margin: 100px 30px;
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
  margin: 100px 0px;
  ${mobile({ fontSize: "20px", margin: "15px 0px" })}
  text-align:left;
  ${tab({ fontSize: "25px", margin: "15px 0px" })}
  text-align:left;
`;

const Content = styled.p`
  font-size: 20px;
  ${mobile({ fontSize: "16px" })}
  ${tab({ fontSize: "18px" })}
`;

const CardSection = styled.div`
  margin: 100px 30px;
  ${mobile({ margin: "50px 5px" })}
  ${tab({ margin: "75px 22.5px" })}
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
  ${mobile({ margin: "20px" })}
`;

const Products = () => {
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
          <Breadcrumb.Item>
            {" "}
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Products and services</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <ImageContainer data-aos="fade-left">
        <Image
          className="headerbanner"
          src={require("../../Images/products.jpg")}
        />
      </ImageContainer>

      <Top data-aos="fade-up">
        <Header> Products & Services</Header>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
          laoreet dolor. Proin in neque lorem. Ut et massa nec tellus finibus
          facilisis. Quisque semper porta elit at venenatis. Aliquam at
          malesuada odio. Suspendisse potenti. Vestibulum feugiat sit amet nibh
          eu molestie. Mauris ornare sapien nec nulla mattis porta.
        </Content>
      </Top>

      <CardSection>
        <Header> Crop Production</Header>
        <Cards data-aos="fade-left">
          <CropCard
            name="Cocoa"
            image={require("../../Images/cocoa.jpg")}
            icon={<RiSeedlingLine />}
          />
          <Link to="/products/palm" className="link">
            <CropCard
              name="Palm"
              image={require("../../Images/palm.jpg")}
              icon={<GiPalmTree />}
            />
          </Link>

          <CropCard
            name="Nuts"
            image={require("../../Images/nuts.jpg")}
            icon={<GiCoconuts />}
          />

          <CropCard
            name="Coffee"
            image={require("../../Images/coffee.jpg")}
            icon={<GiCoffeeBeans />}
          />
        </Cards>
      </CardSection>

      <CardSection>
        <Header> Animal Production</Header>
        <Cards data-aos="fade-left">
          <CropCard
            name="Cow"
            image={require("../../Images/Cow.jpg")}
            icon={<GiCow />}
          />

          <CropCard
            name="Goat"
            image={require("../../Images/Goat.jpg")}
            icon={<GiGoat />}
          />

          <CropCard
            name="Piggery"
            image={require("../../Images/Pig.jpg")}
            icon={<GiPig />}
          />
        </Cards>
      </CardSection>
      <Footer />
    </Container>
  );
};

export default Products;
