import Header from "../navbar/Header";
import styled from "styled-components";
import MusicTopPattern from "./music_top/MusicTopPattern";
import Footer from "../default_components/Footer";
import MusicTop from "./music_top/MusicTop";



const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="row" style={{margin: "unset"}}>
        <div className="col-12">
          <MusicTop/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
