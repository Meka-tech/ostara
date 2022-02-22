import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Breadcrumb } from "react-bootstrap";
import "./Sustainability.styles.css";

const Sustainability = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Sustainability</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="banner">
        <img
          className="headerbanner"
          src={require("../../Images/Sustainability.jpg")}
          alt="image of Header "
        />
      </div>
      <section>
        <div className="textbanner"> Sustainability</div>
        <div>
          <p className="sectionContentS">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            efficitur ipsum sed ex consectetur, pharetra dictum enim vestibulum.
            Nullam at odio congue, luctus enim eget, pharetra tortor. Morbi
            aliquet pretium fringilla. In leo risus, tempor ut urna id, sodales
            commodo justo. Cras nec aliquam nisi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
