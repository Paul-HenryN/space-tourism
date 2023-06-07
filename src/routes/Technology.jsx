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
        <picture className={`${styles.illustration} mg-top-sm mg-top-md-xl`}>
          <source
            media="(min-width: 769px)"
            srcSet={`./src/${technologies[activeTechnologyIndex].images.portrait}`}
          />
          <img
            className="mx-auto"
            src={`./src/${technologies[activeTechnologyIndex].images.landscape}`}
            alt={technologies[activeTechnologyIndex].name}
          />
        </picture>
      )}

      {!technologies[activeTechnologyIndex] ? (
        <p>Loading...</p>
      ) : (
        <Column
          className={`${styles.container} flex-lg-row align-center justify-start row-gap-sm row-gap-md-lg mx-auto mx-lg-12 mg-top-md mg-top-md-xl mg-top-wlg-hmd-3xl col-gap-xl align-md-start pd-btm-xl`}
        >
          <Row
            className={`${styles.carouselButtons} justify-center justify-lg-between col-gap-3xs flex-lg-col justify-lg-between`}
          >
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
            <h2 className="heading-3 mg-top-3xs">
              {technologies[activeTechnologyIndex].name}
            </h2>
            <p className="mg-top-xxs">
              {technologies[activeTechnologyIndex].description}
            </p>
          </Column>
        </Column>
      )}
    </>
  );
}
