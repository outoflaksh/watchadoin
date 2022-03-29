import { CardContainer } from "./styled/MovieCard.styled";
import { Flex } from "./styled/Common.styled";

const MovieCard = ({ movie }) => {
  //   console.log(movie);
  return (
    <CardContainer>
      <Flex align="center">
        <img src={movie.poster} alt="" />
        <h1>{movie.title}</h1>
      </Flex>
    </CardContainer>
  );
};

export default MovieCard;
