import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={`mx-auto`}>
        <Outlet />
      </main>
    </>
  );
}
