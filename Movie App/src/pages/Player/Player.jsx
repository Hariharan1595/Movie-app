import React, { useEffect, useState } from "react";
import back_arrow from "../../assets/back_arrow_icon.png";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";
import spinner from "../../assets/netflix_spinner.gif"


const Player = () => {
  
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const { id } = useParams();
  const navigation = useNavigate();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTJmNzE5YzU4NmZkNjM1ZTkzNGNkMGUzZTMxMTU4NiIsIm5iZiI6MTcyMzEzMDY5NC45NDc0MDIsInN1YiI6IjY2YjQ5MTU4YjViMmI5NjkzNzhiNmZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VqDNAVyx_1eYOqa8ZvwVvW2MC63CeOAgWCYNkvHFm0s",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="player">
      <img src={back_arrow} alt="icon" onClick={() => navigation(-2)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
