import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AuthStatus } from "../AuthStatus";
import { useThemeContext } from "../../customHooks/useThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav>
      <ul className={styles.navbar}>
        <li></li>
        <li>
          <NavLink to="character">Characters</NavLink>
        </li>
        <li>
          <NavLink to="episode">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="location">Locations</NavLink>
        </li>
        <button className="btn" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"} mode
        </button>
        <AuthStatus />
      </ul>
    </nav>
  );
};
