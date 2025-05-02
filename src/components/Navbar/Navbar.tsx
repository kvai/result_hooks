import { Button } from "@mantine/core";
import styles from "./Navbar.module.scss";
import { AuthStatus } from "../AuthStatus";
import { useThemeContext } from "../../customHooks/useThemeContext";
import { IconHome2 } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink to="/character">characters</NavLink>
        </li>
        <li>
          <NavLink to="/episode">episodes</NavLink>
        </li>
        <li>
          <NavLink to="/location">locations</NavLink>
        </li>
        <Button variant="default" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"} mode
        </Button>
        <AuthStatus />
      </ul>
    </nav>
  );
};
