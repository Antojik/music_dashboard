import styled from "styled-components";

const FooterPlayer = styled.div`
  background-color: black; //#0e1a2a;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  color: white;
  border-top: solid 1px black;
`;

const Footer = () => {
  return (
      <FooterPlayer>Когда-нибудь тут будет плеер</FooterPlayer>
  );
};

export default Footer;
