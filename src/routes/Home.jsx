import { Link } from "react-router-dom";
import Column from "../components/Layout/Column";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <Column
        className={`${styles.container} align-center row-gap-xxl mx-auto row-gap-sm-4xl flex-lg-row align-lg-end justify-between col-gap-md`}
      >
        <Column className="row-gap-xxs row-gap-sm-xs">
          <Column className="row-gap-xs">
            <p className="heading-5">
              So, <wbr /> you want to travel to
            </p>
            <h1 className="heading-1">space</h1>
          </Column>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </Column>

        <Link to="/destination" className="btn-primary">
          Explore
        </Link>
      </Column>
    </>
  );
}
