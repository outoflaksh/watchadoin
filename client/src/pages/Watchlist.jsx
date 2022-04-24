import MovieCardList from "../components/MovieCardList";
import AddMovieForm from "../components/AddMovieForm";
import { MovieProvider } from "../contexts/MovieContext";
import { Page, Flex } from "../components/styled/Common.styled";

const Watchlist = () => {
  return (
    <Page>
      <Flex align="center" justify="center" direction="column">
        <MovieProvider>
          <AddMovieForm />
          <MovieCardList />
        </MovieProvider>
      </Flex>
    </Page>
  );
};

export default Watchlist;
