import { useLocation } from "react-router-dom";
import MenuLink from "./MenuLink";
import { pages } from "../shared/globals";
import styles from "../styles/components/Menu.module.css";

export default function Menu({ className }) {
  let location = useLocation();

  return (
    <nav
      className={`${styles.menu} ${className} pd-inline-md pd-inline-xl-3xl`}
    >
      <ul className="flex col-gap-md col-xl-gap-lg" role="menu">
        {pages.map((page, i) => (
          <MenuLink
            className="pd-block-md txt-fs-7 xl-numbered hover-underlined"
            key={i}
            to={page.path}
            active={location.pathname === page.path}
            activeClass="underlined"
          >
            {page.name}
          </MenuLink>
        ))}
      </ul>
    </nav>
  );
}
