import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/Root.module.css";

export default function Root() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={`${styles.container} mx-auto`}>
        <Outlet />
      </main>
    </>
  );
}
