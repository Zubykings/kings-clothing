import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  border:1px solid:
  right:0;
  left:0;
  width: 100%;
`;

export const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0 40px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color: white;
  z-index:999;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 720px) {
    padding: 5px 4px;
    shrink: 0;
  }
`;
