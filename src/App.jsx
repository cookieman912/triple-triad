import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "./cmps/AppHeader";
import Homepage from "./pages/Homepage";
import Game from "./pages/Game";
import Cards from "./pages/Cards";
import AppFooter from "./cmps/AppFooter";

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <Routes>
          <Route path="/game" element={Game} />
          <Route path="/cards" element={Cards} />
          <Route path="/" element={Homepage} />
        </Routes>
        <AppFooter />
      </DndProvider>
    </Router>
  );
}
export default App;
