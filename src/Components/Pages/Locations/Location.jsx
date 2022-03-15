import React, { useState } from "react";
import NavBar from "../../NavBar/index.jsx";
import Sidebar from "../../Sidebar/index.jsx";
import { Breadcrumb } from "react-bootstrap";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Location</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Location;
