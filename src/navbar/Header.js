import logoSite from "../icons/LogoSite.png";
import NavbarList from "./NavbarList";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #9999ff;
  border-bottom: solid 1px black;

`

const Header = () => {
  return (
    <StyledHeader>
        <NavbarList />
    </StyledHeader>
  );
};

export default Header;
