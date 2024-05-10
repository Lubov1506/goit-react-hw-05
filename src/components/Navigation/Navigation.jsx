import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { buildLinkClass } from "helpers/addActiveClass";

const Navigation = () => {
  return (
 
      <nav className={s.nav_wrap}>
        <ul className={s.navlist}>
          <li>
            <NavLink
              className={({ isActive }) => buildLinkClass(isActive, s.active)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => buildLinkClass(isActive, s.active)}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    
  );
};

export default Navigation;
