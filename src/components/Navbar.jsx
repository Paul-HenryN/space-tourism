import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import Row from "./Layout/Row";
import Menu from "./Menu";
import styles from "../styles/components/Navbar.module.css";

export default function Navbar({ className }) {
  return (
    <Row
      className={`${styles.navbar} justify-between align-center pd-block-xs desktop-pd-top-lg`}
    >
      <a href="#">
        <img src={logo} />
      </a>

      <Menu className={`${styles.menu}`} />

      <button className={styles.btnToggle}>
        <img src={iconHamburger} />
      </button>
    </Row>
  );
}
