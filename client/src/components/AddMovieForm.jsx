import { useContext, useRef } from "react";
import { MovieContext } from "../contexts/MovieContext";
import axios from "axios";

import { Input, Button } from "./styled/AddMovieForm.styled";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const addMovieForm = useRef(undefined);

  const handleOnClick = async (e) => {
    e.preventDefault();
    const form = addMovieForm.current;
    const title = form["title"].value;
    const year = form["year"].value;
    const payload = {
      title: title,
      year: year,
    };
    try {
      const movieDetails = await axios.post(
        "http://localhost:8000/add",
        payload
      );

      setMovies((movies) => {
        return [movieDetails.data, ...movies];
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form ref={addMovieForm}>
      <Input type="text" name="title" placeholder="Title" required={true} />
      <Input type="text" name="year" placeholder="Year (optional)" />
      <Button type="submit" onClick={handleOnClick}>
        + Add
      </Button>
    </form>
  );
};

export default AddMovie;
