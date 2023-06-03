import MenuLink from "./MenuLink";
import styles from "../styles/components/SidebarLink.module.css";

export default function SidebarLink({ className, to, active, children }) {
  let finalClass = `${styles.sidebarLink} ${className} txt-fs-5 txt-align-start`;

  return (
    <MenuLink
      to={to}
      className={finalClass}
      active={active}
      activeClass="side-marked"
    >
      {children}
    </MenuLink>
  );
}
