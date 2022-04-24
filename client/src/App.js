import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styled/Global";

import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
