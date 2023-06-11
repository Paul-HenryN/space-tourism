import { Link } from "react-router-dom";
import styles from "../styles/components/MenuLink.module.css";

export default function MenuLink({
  className,
  to,
  active,
  activeClass,
  onClick,
  children,
}) {
  var finalClass = `${className} ${styles.menuLink} ff-secondary txt-upper txt-secondary txt-ls-1`;

  if (active) {
    finalClass += ` ${activeClass}`;
  }

  return (
    <Link
      className={finalClass}
      to={to}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </Link>
  );
}
