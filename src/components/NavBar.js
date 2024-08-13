import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/collection"
        className="nav-link"
      >
        Collection
      </NavLink>
      <NavLink
        to="/profile"
        className="nav-link"
      >
        Profile
      </NavLink>
    </nav>
  );
};

export default NavBar;