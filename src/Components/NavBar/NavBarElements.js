import styled from "styled-components";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

export const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 10;
  font-size: 20px;
  top: 0;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  ${mobile({ height: "60px" })}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 15px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-left: 20px;
  ${mobile({ marginLeft: "0px" })}
  ${tab({ marginLeft: "0px" })}
`;
export const Logo = styled.img`
  width: 18vh;
  height: auto;
  margin: auto;
  transform: scale(2);
  ${mobile({ transform: "scale(0.9)", margin: "auto" })}
  ${tab({ transform: "scale(1.5)", margin: "auto" })}
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: darkgray;
    transform: scale(0.9);
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: auto 0px;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
export const NavItem = styled.li`
  height: 80px;
  text-decoration: none;
`;

export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: black;
  font-size: 16px;
  font-weight: 550;

  &.active {
    box-shadow: 3px solid green;
  }
  &:hover {
    text-decoration: underline 2px solid green;
    border-radius: 10px;
    color: black;
  }
`;
