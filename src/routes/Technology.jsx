import { dataFile } from "../shared/globals";
import PageHeading from "../components/PageHeading";
import styles from "../styles/pages/Technology.module.css";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import Row from "../components/Layout/Row";
import CarouselButton from "../components/CarouselButton";

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
          className="mg-btm-md"
          src={`./src/${technologies[activeTechnologyIndex].images.landscape}`}
          alt={technologies[activeTechnologyIndex].name}
        />
      )}

      {!technologies[activeTechnologyIndex] ? (
        <p>Loading...</p>
      ) : (
        <Column className={`${styles.container} mx-auto`}>
          <Row className="justify-center col-gap-3xs mg-btm-sm">
            {technologies.map((technology, i) => (
              <CarouselButton
                active={activeTechnologyIndex === i}
                key={`tech${i}`}
                onClick={() => setActiveTechnologyIndex(i)}
              >
                {i + 1}
              </CarouselButton>
            ))}
          </Row>

          <Column>
            <p className="heading-5">The terminology...</p>
            <h2 className="mg-btm-sm">
              {technologies[activeTechnologyIndex].name}
            </h2>
            <p>{technologies[activeTechnologyIndex].description}</p>
          </Column>
        </Column>
      )}
    </>
  );
}
