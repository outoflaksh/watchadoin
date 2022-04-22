import MovieCardList from "../components/MovieCardList";
import AddMovie from "../components/AddMovie";
import { MovieProvider } from "../contexts/MovieContext";
import { Page, Flex } from "../components/styled/Common.styled";

const Watchlist = () => {
  return (
    <Page>
      <Flex align="center" justify="center" direction="column">
        <MovieProvider>
          <AddMovie />
          <MovieCardList />
        </MovieProvider>
      </Flex>
    </Page>
  );
};

export default Watchlist;
