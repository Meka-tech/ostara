import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Breadcrumb } from "react-bootstrap";

const Location = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Location</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Location;
