import styled from "styled-components";
import { useState } from "react";

const StyledTrackInterface = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${(props) =>
    props.mouseHovered ? "2px solid green" : "2px solid rgba(0,0,0,0)"};
`;

const AlbumName = styled.div`
  color: white;
  font-weight: bold;
`;

const Artist = styled.div`
  color: grey;
`;

const AlbumImage = styled.img`
  margin-right: 15px;
  border-radius: 5px 5px 5px 5px;
`;

const SongLeftSide = styled.div`
  display: flex;
`;

const SongRightSide = styled.div`
  display: flex;
  align-items: center;
  p {
    color: grey;
    margin: unset;
  }
`;

const MusicTopPattern = ({artistName, songName, image, duration}) => {
  const [mouseHovered, setMouseHovered] = useState(false);

  const MouseEntered = () => {
    setMouseHovered(true);
  };

  const MouseLeft = () => {
    setMouseHovered(false);
  };

  return (
    <StyledTrackInterface
      onMouseOver={MouseEntered}
      mouseHovered={mouseHovered}
      onMouseLeave={MouseLeft}
    >
      <SongLeftSide>
        <AlbumImage
          src = {image}
          width="50px"
        />
        <div>
          <AlbumName>{songName}</AlbumName>
          <Artist>{artistName}</Artist>
        </div>
      </SongLeftSide>
      <SongRightSide>
        <p>{duration}</p>
      </SongRightSide>
    </StyledTrackInterface>
  );
};

export default MusicTopPattern;
