import { Navbar } from "../Navbar/Navbar";
import logo from "../../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Grid } from "@mantine/core";

export const Header = () => {
  return (
    <Grid justify={"space-between"}>
      <Grid.Col span="content">
        <div className={styles.logo}>
          <Link to={"/"}>
            <img style={{ maxWidth: "100%" }} src={logo} alt="Logo" />
          </Link>
        </div>
      </Grid.Col>
      <Grid.Col span="content">
        <Navbar />
      </Grid.Col>
    </Grid>
  );
};
