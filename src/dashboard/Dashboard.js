import Header from "../navbar/Header";
import styled from "styled-components";
import MusicTopPattern from "./music_top/MusicTopPattern";
import Footer from "../default_components/Footer";
import MusicTop from "./music_top/MusicTop";
import LeftBar from "../default_components/LeftBar";
import Playlists from "./playlists/Playlists";

const Dashboard = () => {
  return (
    <>
      <LeftBar />
      <div className="col-md-11" style={{ padding: "0" }}>
        <Header />
        <div className="row" style={{ margin: "unset" }}>
          <div className="col-12">
            <MusicTop />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            
            <Playlists/>
          </div>
          <div className="col-6">
            <Playlists/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
