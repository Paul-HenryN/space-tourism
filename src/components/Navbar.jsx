import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import Row from "./Layout/Row";
import styles from "../styles/components/Navbar.module.css";
import Menu from "./Menu";

export default function Navbar({ className }) {
  return (
    <Row className={`${styles.navbar} justify-between pd-block-xs`}>
      <a href="#">
        <img src={logo} />
      </a>

      <Menu className={`${styles.menu} pd-block-md pd-inline-lg`} />

      <button className={styles.btnToggle}>
        <img src={iconHamburger} />
      </button>
    </Row>
  );
}
