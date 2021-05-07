import styled from "styled-components";
import NavLink from "react-bootstrap/esm/NavLink";

const StyledLink = styled(NavLink)`
  color: grey;
  font-weight: bold;
  &:hover {
    color: #3aaea9;
    transition-duration: 0.5s;
  }
`;

const StyledLinkHeading = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10%;
  margin-top: 20%;
  &:hover {
    color: #3aaea9;
    transition-duration: 0.5s;
  }
`;

const StyledBorder = styled.div`
  border-right: solid 5px red;
  padding: 0;
  margin-bottom: 50px;
`;

const LeftBar = () => {
  return (
    <StyledBorder className="col-md-1">
      <StyledLink>Tut budet logo ili 4to-to takoe</StyledLink>
      <StyledLinkHeading>Recommend</StyledLinkHeading>

      <StyledLink>Home</StyledLink>
      <StyledLink>Gender</StyledLink>
      <StyledLink>Gay</StyledLink>
      <StyledLink>Jojo</StyledLink>
      <StyledLink>ProperMis</StyledLink>

      <StyledLinkHeading>My Lybrary</StyledLinkHeading>

      <StyledLink>Home</StyledLink>
      <StyledLink>Gender</StyledLink>
      <StyledLink>Gay</StyledLink>
      <StyledLink>Jojo</StyledLink>
      <StyledLink>ProperMis</StyledLink>

      <StyledLinkHeading>Jesus</StyledLinkHeading>

      <StyledLink>Home</StyledLink>
      <StyledLink>Gender</StyledLink>
      <StyledLink>Gay</StyledLink>
      <StyledLink>Jojo</StyledLink>
      <StyledLink>ProperMis</StyledLink>
    </StyledBorder>
  );
};

export default LeftBar;
