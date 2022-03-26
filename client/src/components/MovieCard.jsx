import { CardContainer } from "./styled/MovieCard.styled";

const MovieCard = ({ movie }) => {
  //   console.log(movie);
  return (
    <CardContainer>
      <img src={movie.poster} alt="" />
      <h1>{movie.title}</h1>
    </CardContainer>
  );
};

export default MovieCard;
