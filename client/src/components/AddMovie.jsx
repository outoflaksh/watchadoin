import { useContext, useRef } from "react";
import { MovieContext } from "../contexts/MovieContext";
import axios from "axios";

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
      <input type="text" name="title" placeholder="Title" required={true} />
      <input type="text" name="year" placeholder="Year (optional)" />
      <button type="submit" onClick={handleOnClick}>
        + Add
      </button>
    </form>
  );
};

export default AddMovie;
