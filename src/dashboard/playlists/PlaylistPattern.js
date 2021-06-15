import styled from "styled-components";
import { useState } from "react";

const StyledTrackInterface = styled.div`
  display: flex;
  
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
  //border-radius: 35px;
`;

const AlbumNameAndArtist = styled.div`
  padding-top: 4%;
`;


const PlaylistsPattern = ({ artistName, songName, image }) => {
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
      
        <AlbumImage src={image} width="75px" />
        <AlbumNameAndArtist>
          <AlbumName>{songName}</AlbumName>
          <Artist>{artistName}</Artist>
        </AlbumNameAndArtist>
    </StyledTrackInterface>
  );
};

export default PlaylistsPattern;
