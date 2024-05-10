import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { buildLinkClass } from "helpers/addActiveClass";
import Container from "components/Container/Container";

const Navigation = () => {
  return (
 
    <nav className={s.nav_wrap}>
      <Container className={s.container}>
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
        </Container>
      </nav>
    
  );
};

export default Navigation;
