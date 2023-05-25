import styles from "../styles/components/Menu.module.css";
import MenuLink from "./MenuLink";

export default function Menu({ className }) {
  return (
    <nav className={`${styles.menu} ${className} pd-inline-md`}>
      <ul className="flex col-gap-md" role="menu">
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
