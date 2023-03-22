import React from "react";
import styled from "styled-components";

const AppbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const LogoImage = styled.img`
  left: 10px;
  position: absolute;
  width: 72px;
  height: 24px;
`;

const Navbar = styled.ul`
  display: flex;
  list-style-type: none;
  margin:
  padding: 0;
`;

const NavbarItem = styled.li`
  color: #666;
  padding: 0 15px;
`;

const Appbar = ({ url }) => {
  return (
    <AppbarWrapper>
      <LogoImage src={url} />
      <Navbar>
        <NavbarItem>奥迪车型</NavbarItem>
        <NavbarItem>奥迪纯电</NavbarItem>
      </Navbar>
    </AppbarWrapper>
  );
};

export default Appbar;
