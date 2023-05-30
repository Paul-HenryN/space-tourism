import { dataFile } from "../shared/globals";
import PageHeading from "../components/PageHeading";
import styles from "../styles/pages/Technology.module.css";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import Row from "../components/Layout/Row";

async function fetchData() {
  const response = await fetch(dataFile);
  const data = await response.json();

  return data.technology;
}

export default function Technology() {
  let [technologies, setTechnologies] = useState([]);
  let [activeTechnologyIndex, setActiveTechnologyIndex] = useState(0);

  useEffect(() => {
    fetchData().then(setTechnologies);
  }, []);

  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <PageHeading number="03">Space launch 101</PageHeading>

      {!technologies[activeTechnologyIndex] ? (
        <p>Loading...</p>
      ) : (
        <img
          src={`./src/${technologies[activeTechnologyIndex].images.landscape}`}
          alt={technologies[activeTechnologyIndex].name}
        />
      )}

      {!technologies[activeTechnologyIndex] ? (
        <p>Loading...</p>
      ) : (
        <Column>
          <Row className="justify-center col-gap-3xs">
            {technologies.map((technology, i) => (
              <button
                key={`tech${i}`}
                onClick={() => setActiveTechnologyIndex(i)}
                style={{
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                }}
              >
                {i + 1}
              </button>
            ))}
          </Row>

          <Column>
            <p>The terminology...</p>
            <h2>{technologies[activeTechnologyIndex].name}</h2>
            <p>{technologies[activeTechnologyIndex].description}</p>
          </Column>
        </Column>
      )}
    </>
  );
}
