import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Breadcrumb } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import "./AboutUs.style.css";
import { Button } from "react-bootstrap";
import { MdGroups } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import { MdOutlinePeople } from "react-icons/md";
const AboutUs = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div data-aos="fade-left" className="bannerAbout">
        <img
          className="headerbanner"
          src={require("../../Images/About.jpg")}
          alt="image of Header "
        />
      </div>

      <section>
        <div className="textbannerA"> About Us</div>
        <div>
          <p className="sectionContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tempus tempor odio, eu laoreet ex interdum id. Vivamus fermentum
            luctus tortor, ac porttitor justo. Vestibulum bibendum dui eleifend,
            venenatis dolor nec, suscipit neque. Etiam cursus diam vitae nibh
            tempor, sit amet commodo eros consectetur. Vivamus et eros eget
            lacus auctor laoreet vel et purus.
          </p>
        </div>
      </section>
      <div data-aos="fade-up" className="motto">
        <Container>
          {/* <h2 className="sectionHead"> Crop Production</h2> */}
          <Row className="justify-content-md-center">
            <Col md={true}>
              <h4 className="mottohead">Purpose & Vision</h4>
              <p className="mottocontent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tempus tempor odio, eu laoreet ex interdum id. Vivamus fermentum
                luctus tortor, ac porttitor justo.
              </p>
              <Button data-aos="fade-left" variant="green">
                Read more
              </Button>
            </Col>
            <Col md={true}>
              <h4 className="mottohead">Our Strategy</h4>
              <p className="mottocontent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tempus tempor odio, eu laoreet ex interdum id.
              </p>
              <Button data-aos="fade-left" variant="green">
                Read more
              </Button>
            </Col>
            <Col md={true}>
              <h4 className="mottohead">Our Values</h4>
              <p className="mottocontent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tempus tempor odio, eu laoreet ex interdum id.
              </p>
              <Button data-aos="fade-left" className="btnAbout" variant="green">
                Read more
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div data-aos="fade-right" className="learnMore">
        <h2 className="lmHeader">Learn More About Us</h2>
        <div className="lmcontent">
          <div className="aboutgroup">
            <MdGroups className="abIcon" size={100} />
            <p className="abgrouptext"> Our Board</p>
          </div>
          <div className="aboutgroup">
            <MdOutlinePeople className="abIcon" size={100} />
            <p className="abgrouptext"> Our Executive Committees</p>
          </div>
          <div className="aboutgroup">
            <GiInjustice className="abIcon" size={100} />
            <p className="abgrouptext"> Ethics & Compliance</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
