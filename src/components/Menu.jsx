import MenuLink from "./MenuLink";
import styles from "../styles/components/Menu.module.css";

export default function Menu({ className }) {
  return (
    <nav
      className={`${styles.menu} ${className} pd-inline-md pd-inline-xl-3xl`}
    >
      <ul className="flex col-gap-md col-xl-gap-lg" role="menu">
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
