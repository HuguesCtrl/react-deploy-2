import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink
            to="/react-deploy-2/"
            className={({ isActive }) => (isActive ? "strong" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react-deploy-2/modale"
            className={({ isActive }) => (isActive ? "strong" : "")}
          >
            Modale
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react-deploy-2/onglets"
            className={({ isActive }) => (isActive ? "strong" : "")}
          >
            Onglets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react-deploy-2/navbar"
            className={({ isActive }) => (isActive ? "strong" : "")}
          >
            Navbar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react-deploy-2/validation"
            className={({ isActive }) => (isActive ? "strong" : "")}
          >
            Validation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
