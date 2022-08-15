
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "./cmps/AppHeader";
import AppFooter from "./cmps/AppFooter";

import {Outlet} from "react-router-dom";

function App() {
  return (
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <Outlet/>
        <AppFooter />
      </DndProvider>
  );
}
export default App;
