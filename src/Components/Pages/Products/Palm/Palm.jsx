import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import NavBar from "../../../NavBar/index.jsx";
import { mobile } from "../../../../responsive";
import { tab } from "../../../../responsive";
import Footer from "../../../Footer/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../../../Sidebar/index.jsx";

const Container = styled.div``;
const ImageContainer = styled.div`
  margin-top: 0%;
  width: 100vw;
  height: 260px;
  box-shadow: 5px 5px 12px rgb(165, 164, 164);
  margin-bottom: 40px;
`;

const BigBoard = styled.div`
  box-shadow: 2px 2px 8px gray;
  border-radius: 10px;
  padding: 40px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 10px gray;
  }
`;

const Board = styled.div`
  box-shadow: 1px 1px 5px gray;
  padding: 30px;
  width: 45%;
  max-width: fit-content;
  margin: 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  ${mobile({ padding: "15px", margin: "8px", width: "90%" })}
  ${tab({ padding: "15px", margin: "8px", width: "90%" })}
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 8px gray;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Text = styled.div`
  margin: 25px;
  text-align: left;
  ${mobile({ margin: "12px" })}
  ${tab({ margin: "15px" })}
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0px;
`;

const Header = styled.h1`
  font-size: 30px;
  font-weight: 650;
  color: #25523b;
  margin-bottom: 20px;
  ${mobile({ fontSize: "20px" })}
  ${tab({ fontSize: "25px" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #62bd69;
  margin-bottom: 25px 0px;
  ${mobile({ fontSize: "14px" })}
  ${tab({ fontSize: "18px" })}
`;
const Content = styled.p`
  font-size: 16px;
  ${mobile({ fontSize: "10px" })}
  ${tab({ fontSize: "12px" })}
`;
const Table = styled.table`
  padding: 10px;
  max-width: fit-content;
`;
const TableBody = styled.tbody``;
const TableRow = styled.tr``;
const TableHeader = styled.th`
  font-size: 16px;
  font-weight: 600;
  color: #25523b;
  margin-bottom: 25px 0px;
  ${mobile({ fontSize: "10px", padding: "4px" })}
  ${tab({ fontSize: "12px", padding: "4px" })}
  padding: 5px;
`;
const TableData = styled.td`
  padding: 10px;
  font-size: 16px;
  ${mobile({ fontSize: "9px", padding: "4px" })}
  ${tab({ fontSize: "12px", padding: "4px" })}
`;
const Sources = styled.div``;
const SourceText = styled.h1`
  font-size: 18px;

  margin-bottom: 15px;

  ${mobile({ fontSize: "10px" })}
  ${tab({ fontSize: "14px" })}
`;
const ListItem = styled.li`
  font-size: 16px;
  ${mobile({ fontSize: "8px" })}
  ${tab({ fontSize: "12px" })}
`;

const Palm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />

      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          {" "}
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {" "}
          <Link to="/products">Products and services</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Palm</Breadcrumb.Item>
      </Breadcrumb>
      <ImageContainer data-aos="fade-left">
        <Image
          className="headerbanner"
          src={require("../../../Images/palmFruit.jpg")}
        />
      </ImageContainer>
      <Body>
        <Text>
          <BigBoard data-aos="fade-up">
            <Header>PALM OIL</Header>
            <Content>
              <b>
                {" "}
                Palm oil is the most used vegetable oil worldwide. It is
                produced from the pulp of the oil palm fruits. The oil palm is
                the most profitable crop in terms of land use and the most
                sustainable, particularly thanks to its circular production
                method.
              </b>{" "}
              <br />
              Having an oil yield that is 6 to 8 times higher than other
              vegetable oils, oil palm cultivation reduces the need for
              agricultural land and preserves ecosystems.
            </Content>
          </BigBoard>
          <Flex data-aos="fade-right">
            <Board>
              <Title> The Oil Palm</Title>
              <Content>
                The oil palm is a species of palm commonly with leaves of almost
                5-meter-long and the main supplier of vegetable fat. Its fruits,
                very rich in oil, grow in bunches, also called "fresh fruit
                bunches", at the crown of the plant. The palm oil is extracted
                from the pulp of the fruits by simple hot pressing, without
                solvents or chemical additives.
              </Content>
            </Board>
            <Board>
              <Title> Where Does The Palm Oil Grow ?</Title>
              <Content>
                The oil palm is mostly cultivated in West and Central Africa,
                Southeast Asia and South America. These humid tropical regions
                offer optimal development conditions.
              </Content>
            </Board>
            <Board>
              <Title>Oil Palm Cultivation</Title>
              <Content>
                The oil palm seeds are planted in a nursery. The young oil palms
                grow there for a period of about 1 year before they are
                transplanted into the field. After 3 years of growth, fruit
                harvesting starts and continues for almost 30 years. By this
                time, the palm has reached a height of about 15 meters, too tall
                to be harvested manually. Fruit harvesting is done throughout
                the year. Every 8 to 10 days, the fruit bunches, whose weight
                can reach about 15 kilos, are manually harvested using a sickle
                attached to the end of a pole. Oil palm harvesting is very labor
                intensive as it involves little mechanization, and thus
                represents a huge source of direct employment for the local
                population. The harvest is then transported to the mill.{" "}
              </Content>
            </Board>
            <Board>
              <Title>Palm Oil Extraction</Title>
              <Content>
                When the bunches arrive at the mill, they are sterilized under
                steam, facilitating the detachment of the fruits and preventing
                the oil to acidify. The bunches are then placed in rotating
                drums to separate the fruits from the bunches. Before pressing,
                a mechanical and thermal mixing process prepares the fruits.
                During pressing, the crude oil is extracted, the fibers and
                shells are put aside and will be used to produce energy or as
                organic fertilizers. The last step, the clarification, separates
                the crude oil from the rest of the juice by decanting in order
                to obtain a pure crude palm oil.
              </Content>
            </Board>
            <Board>
              <Title>A Circular Production Method</Title>
              <Content>
                Palm oil production is a circular production method where each
                step of the cycle is optimized. Hence, the residual fibers and
                shells from the production process fuel the biomass boilers. The
                steam produced by these boilers enters a turbine that generates
                electricity for the factory and some surrounding villages. The
                rest of the steam is redistributed and provides the heat needed
                for the entire process. Palm oil mills are thus energy
                self-sufficient as they produce renewable energy. The organic
                residues from the processing of the bunches are returned to the
                field and used as organic fertilizers. In addition, all water
                used is treated in lagoons and does not contain any additives.
                Palm oil: an autonomous and sustainable production process. A
                sustainable agriculture label exists: CSPO, established by the
                Roundtable on Sustainable Palm Oil: 4.45 million hectares are
                certified, representing 19.10 million tons or 19% of global
                production. (31/08/2021 -{" "}
                <a href="https://rspo.org/impacts" target="_blank">
                  ( https://rspo.org/impacts)
                </a>
              </Content>
            </Board>
            <Board>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeader></TableHeader>
                    <TableHeader>Oil Palm</TableHeader>
                    <TableHeader>Rapeseeds</TableHeader>
                    <TableHeader>Soya</TableHeader>
                  </TableRow>
                  <TableRow>
                    <TableHeader>Life Cycle</TableHeader>
                    <TableData>25 to 35 years</TableData>
                    <TableData>1 year</TableData>
                    <TableData>1 year</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHeader>
                      Area under cultivation (297.35 million ha 2019/20201)
                    </TableHeader>
                    <TableData>7.89%</TableData>
                    <TableData>10.95%</TableData>
                    <TableData>43.47%</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHeader>
                      Global production (235.83 million T - 2019/20201)
                    </TableHeader>
                    <TableData>73.92 million T</TableData>
                    <TableData>24.94 million T</TableData>
                    <TableData>58.56 million T</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHeader>
                      %of global vegetable oil productionData
                    </TableHeader>
                    <TableData>31%</TableData>
                    <TableData>11%</TableData>
                    <TableData>25%</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHeader>Yearly yield per hectare</TableHeader>
                    <TableData>3.8 T</TableData>
                    <TableData>0.8 T</TableData>
                    <TableData>0.5 T</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHeader>
                      Fertilizer consumption per ton of vegetable oil (kg){" "}
                    </TableHeader>
                    <TableData>213</TableData>
                    <TableData>230</TableData>
                    <TableData>250</TableData>
                  </TableRow>
                </TableBody>
              </Table>
            </Board>
          </Flex>
          <Sources>
            <SourceText>Sources : </SourceText>
            <ListItem>Oil World Annual 2021</ListItem>
            <ListItem>European alliance for substance palm oil</ListItem>
            <ListItem>La palme de la controverse , 2013</ListItem>
          </Sources>
        </Text>
      </Body>
      <Footer />
    </Container>
  );
};

export default Palm;
