import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { PlacesToBe } from "./components/placesToBe/PlacesToBe";
import { History } from "./components/history/History";
import { PlacesToBeContext } from "./contexts/PlacesContext";
import { HistoryPlacesToBeContext } from "./contexts/PlacesContext";

import "./App.css";
import { EditOrCreatePlace } from "./components/editOrCreatePlace/EditOrCreatePlace";
import { useState } from "react";

function App() {
  const [placesToBeData, setPlacesToBeData] = useState([]);
  const [historyPlacesToBe, setHistoryPlacesToBe] = useState([]);
  return (
    <div>
      <Router>
        <Navigation />
        <div className="App">
          <main>
            <PlacesToBeContext.Provider
              value={{ placesToBeData, setPlacesToBeData }}
            >
              <HistoryPlacesToBeContext.Provider
                value={{ historyPlacesToBe, setHistoryPlacesToBe }}
              >
                <Routes>
                  <Route exact path="/" element={<PlacesToBe />}></Route>
                  <Route path="/history" element={<History />}></Route>
                  <Route path="/create" element={<EditOrCreatePlace />}></Route>
                </Routes>
              </HistoryPlacesToBeContext.Provider>
            </PlacesToBeContext.Provider>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
