import { Navbar } from "../Navbar/Navbar";
import logo from "../../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img style={{ maxWidth: "100%" }} src={logo} alt="Logo" />
        </Link>
      </div>
      <Navbar />
    </div>
  );
};
