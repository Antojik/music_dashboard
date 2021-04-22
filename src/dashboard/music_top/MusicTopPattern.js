import styled from "styled-components";
import { useState } from "react";

const StyledTrackInterface = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${(props) => (props.mouseHovered ? "2px solid yellow" : "2px solid rgba(0,0,0,0)")};
  
`;

const AlbumName = styled.div`
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

const MusicTopPattern = () => {
  const [mouseHovered, setMouseHovered] = useState(false);

  const MouseEntered = () => {
    setMouseHovered(true);
  };

  const MouseLeft = () => {
    setMouseHovered(false);
  };

  return (
    <div className="offset-3 col-2" style={{padding: "5px"}}>
      <StyledTrackInterface
        onMouseOver={MouseEntered}
        mouseHovered={mouseHovered}
        onMouseLeave={MouseLeft}
      >
        <SongLeftSide>
          <AlbumImage
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png"
            width="50px"
          />
          <div>
            <AlbumName>Nectar</AlbumName>
            <Artist>Joji</Artist>
          </div>
        </SongLeftSide>
        <SongRightSide>
          <p>60:25</p>
        </SongRightSide>
      </StyledTrackInterface>
    </div>
  );
};

export default MusicTopPattern;
