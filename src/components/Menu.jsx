import MenuLink from "./MenuLink";
import styles from "../styles/components/Menu.module.css";
import { useLocation } from "react-router-dom";

export default function Menu({ className }) {
  let location = useLocation();

  return (
    <nav
      className={`${styles.menu} ${className} pd-inline-md pd-inline-xl-3xl`}
    >
      <ul className="flex col-gap-md col-xl-gap-lg" role="menu">
        <MenuLink to="/" active={location.pathname === "/"}>
          Home
        </MenuLink>
        <MenuLink
          to="/destination"
          active={location.pathname === "/destination"}
        >
          Destination
        </MenuLink>
        <MenuLink to="/crew" active={location.pathname === "/crew"}>
          Crew
        </MenuLink>
        <MenuLink to="/technology" active={location.pathname === "/technology"}>
          Technology
        </MenuLink>
      </ul>
    </nav>
  );
}
