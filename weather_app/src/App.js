import Intropage from "./pages/intropage";
import Weatherreport from "./pages/weatherreport";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intropage />} />
          <Route path="/weatherreport" element={<Weatherreport />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
