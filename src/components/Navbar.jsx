import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import Row from "./Layout/Row";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import styles from "../styles/components/Navbar.module.css";
import { useState } from "react";

export default function Navbar({ className }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <Row
        className={`${styles.navbar} justify-between align-center pd-top-xs pd-top-wlg-hmd-md`}
      >
        <Link to="/">
          <img src={logo} className={styles.logo} />
        </Link>

        <Menu className={`${styles.menu}`} />

        <button
          className={styles.btnToggle}
          onClick={() => {
            setSidebarVisible(!sidebarVisible);
          }}
          style={{ position: sidebarVisible ? "fixed" : "static" }}
        >
          <img src={sidebarVisible ? iconClose : iconHamburger} />
        </button>
      </Row>

      <Sidebar
        visible={sidebarVisible}
        setVisible={(visible) => {
          setSidebarVisible(visible);
        }}
      />
    </>
  );
}
