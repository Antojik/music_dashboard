import logoSite from "../icons/LogoSite.png";
import NavbarList from "./NavbarList";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0e1a2a; //#0e1a2a ;
  

`

const Header = () => {
  return (
    <StyledHeader>
        <NavbarList />
    </StyledHeader>
  );
};

export default Header;
