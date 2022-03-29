import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./components/styled/Global";

import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
