import styled from "styled-components";

import { CardContainer, Info } from "./styled/MovieCard.styled";
import { Flex } from "./styled/Common.styled";

const MovieCard = ({ movie }) => {
  //   console.log(movie);
  return (
    <CardContainer>
      <Flex align="center">
        <img src={movie.poster} alt="" />
        <Info>
          <Flex direction="column" align="flex-start">
            <h1>
              {movie.title}
              <span>IMDb {movie.rating}</span>
            </h1>
            <p style={genreStyles}>{movie.genre}</p>
            <p>{movie.plot}</p>
            <p style={castStyles}>Cast: {movie.cast}</p>
          </Flex>
        </Info>
      </Flex>
    </CardContainer>
  );
};

const genreStyles = {
  fontStyle: "italic",
  fontWeight: 300,
};

const castStyles = {
  fontWeight: 500,
  color: "#9AAADE",
};

export default MovieCard;
