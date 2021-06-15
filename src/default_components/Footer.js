import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import styled from "styled-components";
import iconPause from "../icons/pause.png";
import prevSong from "../icons/prevSong.png";
import nextSong from "../icons/nextSong.png";
import Slider from "@material-ui/core/Slider";
import iconVolume from "../icons/volume1.png"; 
import iconSettings from "../icons/settings.png";

const StyledSlider = styled(Slider)`
  margin-right: 30px !important;
  color: #3aaea9 !important;
  width: 65% !important;
`

const StyledSliderVolume = styled(Slider)`
  color: #3aaea9 !important;
  width: 20% !important;
`

const FooterPlayer = styled.div`
  background-color: #0e1a2a; 
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  color: white;
  border-top: solid 3px red;
`;

const StyledPause = styled.img`
  margin-left: 2%;
  margin-right: 2%;
  cursor: pointer;
  width: 25px;
`;

const ControlComponents = styled.div`
  padding-top: 10px;
`;

const OtherControlComponents = styled.div`
  padding-top: 10px;
  display: flex;
`;

const PrevSong = styled.img`
 cursor: pointer;
 width: 15px;
`;

const NextSong = styled.img`
 cursor: pointer;
 width: 15px;
`;

const StyledVolume = styled.img`
  margin-right: 3%;
  margin-bottom: 4%;
  width: 4%;
`;

const StyledTime = styled.p`
  color: #8a8f9d;
`;

const StyledSettings = styled.img`
  margin-left: 40%;
  margin-bottom: 4%;
  width: 25px;
`;

const Footer = () => {
  const [time, setTime] = React.useState(30);
  const [volume, setVolume] = React.useState(30);

  const handleChangeTime = (event, newValue) => {
    setTime(newValue);
  };

  const handleChangeVolume = (event, newValue) => {
    setVolume(newValue);
  };

  return (
      <FooterPlayer className="row">
        <ControlComponents className="col-md-5">
          
          <PrevSong src={prevSong}  />

          <StyledPause src={iconPause} />

          <NextSong src={nextSong}  />

        </ControlComponents>

        <OtherControlComponents className="col-md-4">
            <StyledSlider value={time} onChange={handleChangeTime} aria-labelledby="continuous-slider" />
            <StyledTime>3:45</StyledTime>
        </OtherControlComponents>
        <ControlComponents className="col-md-3">
          <StyledVolume src={iconVolume} />
          <StyledSliderVolume value={volume} onChange={handleChangeVolume} aria-labelledby="continuous-slider" />
          <StyledSettings src={iconSettings} />
        </ControlComponents>
        
      </FooterPlayer>
  );
};

export default Footer;
