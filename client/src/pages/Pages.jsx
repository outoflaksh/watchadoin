import { Route, Routes } from "react-router-dom";

//pages
import Watchlist from "./Watchlist";

const Pages = () => {
  return (
    <Routes>
      <Route path="watchlist" element={<Watchlist />}></Route>
    </Routes>
  );
};

export default Pages;
