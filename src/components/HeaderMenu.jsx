import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #222;
  color: #fff;
`;

const HeaderLogo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.a`
  display: inline-block;
  margin-left: 1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #8ac6d1;
  }
`;

function HeaderMenu() {
  return (
    <Header>
      <HeaderLogo>Wowly</HeaderLogo>
      <HeaderNav>
        <HeaderLink href="#">Home</HeaderLink>
        <HeaderLink href="#">Features</HeaderLink>
        <HeaderLink href="#">Pricing</HeaderLink>
        <HeaderLink href="#">Contact</HeaderLink>
      </HeaderNav>
    </Header>
  );
}

export default HeaderMenu;
