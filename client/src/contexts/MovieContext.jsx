import { createContext, useState } from "react";
import movieList from "../components/movies";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(movieList);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
