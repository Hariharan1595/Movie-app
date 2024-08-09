import React, { useEffect, useRef, useState } from "react";
import "./Title.css";
import { Link } from "react-router-dom";

import spinner from "../../assets/netflix_spinner.gif"

const Title = ({ titileName, category }) => {
  const [apiData, setApiData] = useState([]);
  
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTJmNzE5YzU4NmZkNjM1ZTkzNGNkMGUzZTMxMTU4NiIsIm5iZiI6MTcyMzEyODc2OC42MTA5NDksInN1YiI6IjY2YjQ5MTU4YjViMmI5NjkzNzhiNmZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3HfXSNmZVmqRktK90cup8qupf7XUzHBdNMATbtcTKnQ",
    },
  };

  const cardRef = useRef();
  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="title">
      <h2>{titileName ? titileName : "Popular on Netflix"}</h2>
      <div className="card_list" ref={cardRef}>
        {apiData.map((card, i) => (
          <Link to={`/player/${card.id}`} key={i} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt={card.name}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Title;
