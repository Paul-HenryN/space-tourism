import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import Row from "./Layout/Row";
import Menu from "./Menu";
import styles from "../styles/components/Navbar.module.css";

export default function Navbar({ className }) {
  return (
    <Row
      className={`${styles.navbar} justify-between align-center pd-block-xs pd-top-lg-lg pd-top-hsm-sm`}
    >
      <Link to="/">
        <img src={logo} />
      </Link>

      <Menu className={`${styles.menu}`} />

      <button className={styles.btnToggle}>
        <img src={iconHamburger} />
      </button>
    </Row>
  );
}
