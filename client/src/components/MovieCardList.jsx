import React from "react";
import MovieCard from "./MovieCard.jsx";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext.jsx";

const MovieCardList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div style={{ width: "65%" }}>
      {movies.map((movie, idx) => (
        <MovieCard movie={movie} key={idx} />
      ))}
    </div>
  );
};

export default MovieCardList;
