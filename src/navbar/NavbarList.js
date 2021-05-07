import iconSearch from "../icons/search.png";
import { useState } from "react";
import SignIn from "../sign_in/SignIn";
import CreateAccount from "../create_account/CreateAccount";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import NavItem from "react-bootstrap/esm/NavItem";
import NavLink from "react-bootstrap/esm/NavLink";
import logoSite from "../icons/LogoSite.png";
import LogoImage from "react-bootstrap/Image";
import NavbarBrand from "react-bootstrap/NavbarBrand";

const NavElement = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  padding: 18px 30px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  &:hover {
    transition-duration: 0.65s;
    color: #3aaea9;
    font-weight: bold;
  }
`;

const StyledInput = styled.input`
  background-color: #0e1a2a;
  width: 15%;
  color: white;
  border: none;
  outline: none !important;
`;

const StyledButton = styled.button`
  background-color: #0e1a2a !important;
  border: unset !important;
`;

const NavbarList = () => {
  const [showedSignIn, setShowedSignIn] = useState(false);
  const ShowSignIn = () => {
    setShowedSignIn(true);
  };
  const [showedCreateAccount, setShowedCreateAccount] = useState(false);
  const ShowCreateAccount = () => {
    setShowedCreateAccount(true);
  };

  return (
    <StyledNav>
      <NavElement>
        <NavItem>
          <div class="input-group wid">
            <StyledInput
              type="text"
              class="form-control"
              placeholder="Search"
            />
            <div class="input-group-append">
              <StyledButton class="btn btn-light" type="button" id="searchIcon">
                <img src={iconSearch} width="50%" />
              </StyledButton>
            </div>
          </div>
        </NavItem>
      </NavElement>

      <NavElement>
        <StyledNavLink onClick={ShowSignIn} href="#">
          Sign in
        </StyledNavLink>

        <StyledNavLink onClick={ShowCreateAccount} href="#">
          Create account
        </StyledNavLink>
      </NavElement>

      {showedSignIn && <SignIn />}
      {showedCreateAccount && <CreateAccount />}
    </StyledNav>
  );
};

export default NavbarList;
