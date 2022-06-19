import { HashRouter as Router, Routes ,Route} from "react-router-dom";
import AppHeader from "./cmps/AppHeader";
import Homepage from "./pages/Homepage";
import Game from './pages/Game';
import Cards from './pages/Cards';
import AppFooter from "./cmps/AppFooter";
function App() {  
  return (
    <Router>
        <AppHeader/>
          <Routes>
          {/* <Route path = "/pages/Game" component = {Game}/>  */}
          {/* <Route path = "/pages/Cards" component = {Cards}/> */}
          <Route path = "/" element={Homepage}/>
          </Routes>
        <AppFooter/>
    </Router>
  );
}
export default App
