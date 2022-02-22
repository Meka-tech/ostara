import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HomePage.style.css";
import Footer from "../../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <section data-aos="fade-up">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="headerSection " lg={true}>
              <h2 className="sectionHeadH">
                {" "}
                Providing Food Feed and Fibre Whether it's working with rice
              </h2>
              <p className="sectionContentH">
                {" "}
                farmers in Africa, growing cotton in Australia, or developing
                innovative ingredients in Asia, we help our customers meet
                increasing consumer demands for sustainable sourcing and healthy
                foods.
              </p>
              <Button variant="green">Explore our Product & Services</Button>
            </Col>
            <Col md={true}>
              <img className="images" src={require("../../Images/corn.png")} />
            </Col>
          </Row>
        </Container>
        <hr />
      </section>
      <section>
        <h2 className="sectionHeadH"> Want to know more about us ?</h2>
        <p className="sectionContentH">
          We are a leading food and agri-business, supplying food ingredients,
          feed and fibre to thousands of customers worldwide, ranging from
          multi-national organisations with world famous brands to small family
          run businesses.
        </p>
        <Button data-aos="fade-left" variant="green">
          Find Out More About Us
        </Button>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
