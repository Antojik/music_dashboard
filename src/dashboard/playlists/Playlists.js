import styled from "styled-components";
import PlaylistsPattern from "./PlaylistPattern";

const Playlists = () => {
  const patterns = [
    {
      artistName: "blabla",
      songName: "blabla",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "Koku",
      songName: "Jin",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "123123213",
      songName: "421521521",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
    },
  ];

  let patternsContainer = [];

  patterns.forEach((pattern) => {
    patternsContainer.push(
      <div className="offset-2 col-3">
        <PlaylistsPattern
          artistName={pattern.artistName}
          songName={pattern.songName}
          image={pattern.image}
          duration={pattern.duration}
        />
      </div>
    );
  });

  return (
    <>
    <p style={{color: "white" }}>Weekly TOP</p>
    <div className="row" style={{ margin: "unset" }}>
      {patternsContainer}
    </div>
    </>
  );
};

export default Playlists;
