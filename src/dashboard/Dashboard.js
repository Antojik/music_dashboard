import Header from "../navbar/Header";
import styled from "styled-components";
import MusicTopPattern from "./music_top/MusicTopPattern";

const FooterPlayer = styled.div`
    background-color: #9999ff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    color: white; 
    border-top: solid 1px black;
`

    
const Dashboard = () => {
    return (
        <div>
            <Header/>
                    <MusicTopPattern/>
            <FooterPlayer>
                Когда-нибудь тут будет плеер
            </FooterPlayer>
        </div>
    );
  };
  
  export default Dashboard;
  