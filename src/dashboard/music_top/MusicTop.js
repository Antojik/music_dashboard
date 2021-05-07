import styled from "styled-components";
import MusicTopPattern from "./MusicTopPattern";

const MusicTop = () => {
  const patterns = [
    {
      artistName: "blabla",
      songName: "blabla",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },
    {
      artistName: "Koku",
      songName: "Jin",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "20:20"
    },
    {
      artistName: "123123213",
      songName: "421521521",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },
    {
      artistName: "blabla",
      songName: "blabla",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
      duration: "60:60"
    },

  ];

  let patternsContainer = [];

  patterns.forEach(( pattern ) => {
    patternsContainer.push(
      <div className="offset-2 col-3">
        <MusicTopPattern
         artistName={pattern.artistName}
         songName={pattern.songName}
         image={pattern.image}
         duration={pattern.duration}/>
      </div>
    )
  })

  return (
    <div className="row" style={{margin: "unset"}}>
      {patternsContainer}
    </div>
  );
};

export default MusicTop;
