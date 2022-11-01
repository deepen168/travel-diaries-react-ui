import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { PlacesToBe } from "./components/placesToBe/PlacesToBe";
import { History } from "./components/history/History";

import "./App.css";
import { EditOrCreatePlace } from "./components/editOrCreatePlace/EditOrCreatePlace";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="App">
          <main>
            <Routes>
              <Route exact path="/" element={<PlacesToBe />}></Route>
              <Route path="/history" element={<History />}></Route>
              <Route path="/create" element={<EditOrCreatePlace />}></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
