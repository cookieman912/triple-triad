import { Link } from "react-router-dom";



export default function AppHeader() {
  return (
    <header className="app-header">
        <div className="header-content flex between">
          <h1>Triple Triad</h1>
          <nav>
            <ul className="flex">
              <li><Link  to="/Home">Home</Link></li>
              <li><Link  to="/game">Quick Start</Link></li>
              <li><Link  to="/cards">Cards</Link></li>
            </ul>
        </nav>
      </div>  
    </header>
  );
}
