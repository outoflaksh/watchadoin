import React from "react";
import movieList from "./movies.js";
import MovieCard from "./MovieCard.jsx";

const MovieCardList = () => {
  return (
    <div style={{ width: "65%" }}>
      {movieList.map((movie, idx) => (
        <MovieCard movie={movie} key={idx} />
      ))}
    </div>
  );
};

export default MovieCardList;
