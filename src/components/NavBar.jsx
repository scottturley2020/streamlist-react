import { NavLink } from "react-router-dom";
import { FaFilm, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

export default function NavBar() {
  return (
    <header className="navHeader">
      {/* Brand (left side) */}
      <div className="brand">
        <span className="brandText">StreamList</span>
      </div>

      {/* Navigation links (right side) */}
      <nav className="navLinks">
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaFilm /> Movies
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaShoppingCart /> Cart
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaInfoCircle /> About
        </NavLink>
      </nav>
    </header>
  );
}
