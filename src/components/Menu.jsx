import styles from "../styles/components/Menu.module.css";
import MenuLink from "./MenuLink";

export default function Menu({ className }) {
  return (
    <nav
      className={`${styles.menu} ${className} pd-inline-md desktop-pd-inline-xxxl`}
    >
      <ul className="flex col-gap-md desktop-col-gap-lg" role="menu">
        <MenuLink to="/" active>
          Home
        </MenuLink>
        <MenuLink to="/destination">Destination</MenuLink>
        <MenuLink to="/crew">Crew</MenuLink>
        <MenuLink to="/technology">Technology</MenuLink>
      </ul>
    </nav>
  );
}
