import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
