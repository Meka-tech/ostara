import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./Products.style.css";
import { Breadcrumb } from "react-bootstrap";
import CropCard from "../../CropCard/CropCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import { RiSeedlingLine } from "react-icons/ri";
import { GiGoat } from "react-icons/gi";
import { GiCow } from "react-icons/gi";
import { GiPig } from "react-icons/gi";
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";

const Products = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Products and services</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="banner">
        <img
          className="headerbanner"
          src={require("../../Images/products.jpg")}
          alt="image of Header "
        />
      </div>

      <section>
        <div className="textbanner"> Products & Services</div>
        <div>
          <p className="sectionContentP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec laoreet dolor. Proin in neque lorem. Ut et massa nec tellus
            finibus facilisis. Quisque semper porta elit at venenatis. Aliquam
            at malesuada odio. Suspendisse potenti. Vestibulum feugiat sit amet
            nibh eu molestie. Mauris ornare sapien nec nulla mattis porta.
          </p>
        </div>
      </section>

      <div className="cropSection">
        <Container>
          <h2 className="sectionHead"> Crop Production</h2>
          <Row className="justify-content-md-center">
            <Col sm={true}>
              <CropCard
                name="Cocoa"
                image={require("../../Images/cocoa.jpg")}
                icon={<RiSeedlingLine />}
              />
            </Col>

            <Col sm={true}>
              <CropCard
                name="Palm"
                image={require("../../Images/palm.jpg")}
                icon={<GiPalmTree />}
              />
            </Col>
            <Col sm={true}>
              <CropCard
                name="Nuts"
                image={require("../../Images/nuts.jpg")}
                icon={<GiCoconuts />}
              />
            </Col>
            <Col sm={true}>
              <CropCard
                name="Coffee"
                image={require("../../Images/coffee.jpg")}
                icon={<GiCoffeeBeans />}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="animalSection">
        <Container>
          <h2 className="sectionHead"> Animal Production</h2>
          <Row className="justify-content-md-center">
            <Col sm={true}>
              <CropCard
                name="Cow"
                image={require("../../Images/Cow.jpg")}
                icon={<GiCow />}
              />
            </Col>
            <Col sm={true}>
              <CropCard
                name="Goat"
                image={require("../../Images/Goat.jpg")}
                icon={<GiGoat />}
              />
            </Col>
            <Col sm={true}>
              <CropCard
                name="Piggery"
                image={require("../../Images/Pig.jpg")}
                icon={<GiPig />}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
