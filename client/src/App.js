import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
