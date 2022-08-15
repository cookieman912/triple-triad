import { NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="app-header">
        <div className="header-content flex between">
          <h1>Triple Triad</h1>
          <nav>
            <ul className="flex">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink exact to="/game">Quick Start</NavLink></li>
              <li><NavLink exact to="/cards">Cards</NavLink></li>
            </ul>
        </nav>
      </div>  
    </header>
  );
}
