import Column from "./Layout/Column";
import { pages } from "../shared/globals";
import styles from "../styles/components/Sidebar.module.css";
import SidebarLink from "./SidebarLink";
import { useLocation } from "react-router-dom";

export default function Sidebar({ visible, setVisible }) {
  const location = useLocation();

  return (
    <Column
      className={`${styles.sidebar} pd-top-md d-md-none ${
        visible ? "translate-x-0" : "translate-x-100"
      }`}
    >
      <nav className="mg-top-xl">
        <ul role="list" className="flex flex-col align-stretch row-gap-md">
          {pages.map((page, i) => (
            <SidebarLink
              className="pd-left-sm"
              key={`sidebarLink${i}`}
              to={page.path}
              active={page.path === location.pathname}
              onClick={() => {
                setVisible(false);
              }}
            >
              {page.name}
            </SidebarLink>
          ))}
        </ul>
      </nav>
    </Column>
  );
}
