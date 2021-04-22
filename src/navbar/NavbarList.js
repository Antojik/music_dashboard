import iconSearch from "../icons/search.svg";
import { useState } from "react";
import SignIn from "../sign_in/SignIn";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import NavItem from "react-bootstrap/esm/NavItem";
import NavLink from "react-bootstrap/esm/NavLink";
import logoSite from "../icons/LogoSite.png";
import LogoImage from "react-bootstrap/Image";
import NavbarBrand from "react-bootstrap/NavbarBrand";


const StyledNav = styled.div`
display: flex;
margin-top: 18px;
width: 48%;
justify-content: flex-end;
`;

const StyledNavLink = styled(NavLink)`
color: white;
font-weight: bold;
&:hover{
  transition-duration: 0.65s;
  color: black;
  font-weight: bold; 
}
`;

const NavbarList = () => {
  const [showedSignIn, setShowedSignIn] = useState(false);
  const ShowSignIn = () => {
    setShowedSignIn(true);
  };

  return (
    <Nav>
      <NavbarBrand>
        <LogoImage src={logoSite} width="60" />
      </NavbarBrand>
      <StyledNav>
        <NavItem>
          <div class="input-group wid">
            <input
              type="text"
              class="form-control"
              placeholder="Введите исполнителя или название песни"
            />
            <div class="input-group-append">
              <button class="btn btn-light" type="button" id="searchIcon">
                <img src={iconSearch} />
              </button>
            </div>
          </div>
        </NavItem>
      </StyledNav>

      <StyledNav>


          <StyledNavLink onClick={ShowSignIn} href="#">
            Sign in
          </StyledNavLink>



          <StyledNavLink href="#">Create account</StyledNavLink>

      </StyledNav>

      {showedSignIn && <SignIn />}
    </Nav>
  );
};

export default NavbarList;
