import { Link } from "react-router-dom";
import styles from "../styles/components/MenuLink.module.css";

export default function MenuLink({ className, to, active, children }) {
  var finalClass = `${className} ${styles.menuLink} ff-secondary txt-upper txt-secondary txt-ls-1 txt-fs-7 pd-block-md hover-underlined`;

  if (active) {
    finalClass += " underlined";
  }

  return (
    <Link className={finalClass} to={to}>
      {children}
    </Link>
  );
}
