import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header({ setSearchQuery }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo">
            BokPortalen
          </Link>

          <nav className="nav">
            <Link
              to="/"
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>

            <Link
              to="/favorites"
              className={
                location.pathname === "/favorites" ? "nav-link active" : "nav-link"
              }
            >
              Favorites
            </Link>
          </nav>
        </div>

        <div className="header-right">
          <input
            type="text"
            placeholder="Søk etter bøker..."
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
