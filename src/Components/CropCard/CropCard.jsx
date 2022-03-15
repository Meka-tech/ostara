import React from "react";
import "./CropCard.style.css";
import { RiSeedlingLine } from "react-icons/ri";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

const Tag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Card = styled.div`
  margin: 10px;
  width: 300px;
  height: 300px;
  position: relative;
  background-color: #fcfcfc;
  box-shadow: 2px 2px 5px gray;
  border-radius: 10px;
  transition: all 0.5s ease;
  ${mobile({ width: "100px", height: "100px" })}
  ${tab({ width: "100px", height: "100px" })}
  &:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 6px gray;
  }
  &:hover ${Image} {
    filter: blur(0.6px);
    opacity: 1;
  }
  &:hover ${Tag} {
    color: white;
  }
`;

const Icon = styled.div`
  font-size: 25px;
`;

const CropName = styled.h1`
  font-size: 25px;
  ${mobile({ fontSize: "10px" })}
  ${tab({ fontSize: "15px" })}
`;

const CropCard = (props) => {
  return (
    <Card>
      <Image alt="crop" src={props.image} />
      <Tag>
        <Icon>{props.icon}</Icon>
        <CropName> {props.name} </CropName>
      </Tag>
    </Card>
  );
};

export default CropCard;
