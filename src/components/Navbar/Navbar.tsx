import { Button, NavLink } from "@mantine/core";
import styles from "./Navbar.module.scss";
import { AuthStatus } from "../AuthStatus";
import { useThemeContext } from "../../customHooks/useThemeContext";
import { IconHome2 } from "@tabler/icons-react";
export const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink
            href="/"
            label="Home"
            leftSection={<IconHome2 size={16} stroke={1.5} />}
          />
        </li>
        <li>
          <NavLink href="character" label="Characters" />
        </li>
        <li>
          <NavLink href="character" label="Episodes" />
        </li>
        <li>
          <NavLink href="character" label="Locations" />
        </li>
        <Button variant="default" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"} mode
        </Button>
        <AuthStatus />
      </ul>
    </nav>
  );
};
