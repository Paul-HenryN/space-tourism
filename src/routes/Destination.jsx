import { dataFile } from "../shared/globals";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import TabLink from "../components/TabLink";
import styles from "../styles/pages/Destination.module.css";
import PageHeading from "../components/PageHeading";

async function fetchData() {
  const response = await fetch(dataFile);
  const data = await response.json();

  return data.destinations;
}

export default function Destination() {
  let [activeDestinationIndex, setActiveDesinationIndex] = useState(0);
  let [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchData().then(setDestinations);
  }, []);

  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <PageHeading number="01">Pick your destination</PageHeading>

      <Column
        className={`${styles.container} row-gap-xxs row-gap-md-xl mx-auto justify-between align-center flex-lg-row mg-top-md mg-top-md-xl pd-btm-xxl`}
      >
        {!destinations[activeDestinationIndex] ? (
          <p>Loading...</p>
        ) : (
          <img
            className={`${styles.illustration}`}
            src={`./src/${destinations[activeDestinationIndex].images.png}`}
            alt={destinations[activeDestinationIndex].name}
          />
        )}

        <Column className="row-gap-xxs row-gap-md-xs align-center align-lg-start">
          {!destinations[activeDestinationIndex] ? (
            <p>Loading...</p>
          ) : (
            <>
              <ul className="flex col-gap-xs col-gap-md-sm" role="list">
                {destinations.map((destination, i) => (
                  <li key={`destination${i}`}>
                    <TabLink
                      onClick={() => {
                        setActiveDesinationIndex(i);
                      }}
                      active={activeDestinationIndex === i}
                    >
                      {destination.name}
                    </TabLink>
                  </li>
                ))}
              </ul>
              <Column>
                <h1 className="heading-2">
                  {destinations[activeDestinationIndex].name}
                </h1>
                <p>{destinations[activeDestinationIndex].description}</p>
                <hr className="mg-top-sm mg-top-md-lg" />
              </Column>
              <Column className="row-gap-sm col-gap-xxl flex-sm-row">
                <Column className="row-gap-3xs row-gap-lg-none">
                  <p className="subheading-2">Avg. Distance</p>
                  <p className="subheading-1">
                    {destinations[activeDestinationIndex].distance}
                  </p>
                </Column>
                <Column className="row-gap-3xs row-gap-lg-none">
                  <p className="subheading-2">Est. Travel Time</p>
                  <p className="subheading-1">
                    {destinations[activeDestinationIndex].travel}
                  </p>
                </Column>
              </Column>
            </>
          )}
        </Column>
      </Column>
    </>
  );
}
