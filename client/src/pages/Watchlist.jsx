import MovieCardList from "../components/MovieCardList";
import { Page, Flex } from "../components/styled/Common.styled";

const Watchlist = () => {
  return (
    <Page>
      <Flex align="center" justify="center">
        <MovieCardList />
      </Flex>
    </Page>
  );
};

export default Watchlist;
