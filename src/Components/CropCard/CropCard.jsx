import React from "react";
import "./CropCard.style.css";
import { RiSeedlingLine } from "react-icons/ri";

const CropCard = (props) => {
  return (
    <div className="cropcard">
      <img className="cropImage" alt="crop" src={props.image} />
      <div className="centerDiv">
        <div className="icon">{props.icon}</div>
        <h1 className="cropName"> {props.name} </h1>
      </div>
    </div>
  );
};

export default CropCard;
