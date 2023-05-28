import img from "../assets/crew/image-douglas-hurley.png";
import Column from "../components/Layout/Column";
import Row from "../components/Layout/Row";
import styles from "../styles/pages/Crew.module.css";

export default function Crew() {
  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <h1 className="page-heading">Meet your crew</h1>

      <Column>
        <Column>
          <img src={img} />
          <hr />
        </Column>

        <Column>
          <Row>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </Row>

          <Column>
            <Column>
              <p>Commander</p>
              <h2>Douglas hurley</h2>
            </Column>

            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </Column>
        </Column>
      </Column>
    </>
  );
}
