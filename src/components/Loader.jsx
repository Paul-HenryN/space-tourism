import logo from "../assets/shared/logo.svg";
import styles from "../styles/components/Loader.module.css";

export default function Loader() {
  return (
    <div className={`${styles.loader} flex align-center justify-center`}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
    </div>
  );
}
