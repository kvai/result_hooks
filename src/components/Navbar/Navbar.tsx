import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink to="characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="episodes">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="locations">Locations</NavLink>
        </li>
      </ul>
    </nav>
  );
};