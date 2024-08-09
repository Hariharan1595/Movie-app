import React from "react";
import "./Home.css";
import Navbar from "../../comoponents/Navbar/Navbar";
import hero from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import Title from "../../comoponents/TitleCard/Title";
import Footer from "../../comoponents/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero} alt="img" className="hero-img" />
        <div className="des">
          <img src={hero_title} alt="img" className="des-img" />
          <p>
            Discovering his ties to a secret ancient on order, a young Man
            living in mordern istanbul embarks on a quest to save the city from
            an immortal enemy.{" "}
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play} alt="icon" />
              play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="icon" />
              More info
            </button>
          </div>
          <Title />
        </div>
      </div>
      <div className="morecards">
        <Title titileName={"Blockbuster Movies"} category={"top_rated"} />
        <Title titileName={"Only on Netflix"} category={"popular"} />
        <Title titileName={"Upcoming"} category={"upcoming"} />
        <Title titileName={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
