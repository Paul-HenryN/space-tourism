import { destinations } from "../shared/globals";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import TabLink from "../components/TabLink";
import styles from "../styles/pages/Destination.module.css";

async function fetchData(destinationName) {
  let newDestination;

  await fetch("./src/data.json")
    .then((response) => response.json())
    .then((data) => {
      for (const destination of data.destinations) {
        if (destination.name.toLowerCase() === destinationName.toLowerCase()) {
          newDestination = destination;
          break;
        }
      }
    });

  return newDestination;
}

export default function Destination() {
  let [destinationName, setDestinationName] = useState("moon");
  let [destination, setDestination] = useState({});

  useEffect(() => {
    fetchData(destinationName).then(setDestination);
  }, [destinationName]);

  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <Column className="row-gap-sm mg-btm-xxl">
        <Column className="row-gap-sm align-center">
          <h2 className="page-heading">Pick your destination</h2>
          <img
            width="50%"
            src={`./src/${
              destination && destination.images && destination.images.png
            }`}
            alt={destination && destination.name}
          />
        </Column>

        <Column className="row-gap-sm align-center">
          <ul className="flex col-gap-xs" role="list">
            {destinations.map((destination, i) => (
              <li key={`destination${i}`}>
                <TabLink
                  onClick={() => {
                    setDestinationName(destination);
                  }}
                  active={
                    destinationName.toLocaleLowerCase() ===
                    destination.toLocaleLowerCase()
                  }
                >
                  {destination}
                </TabLink>
              </li>
            ))}
          </ul>

          <Column>
            <h1 className="heading-2">{destination && destination.name}</h1>
            <p>{destination && destination.description}</p>
          </Column>

          <Column className="row-gap-sm">
            <hr />
            <Column className="row-gap-sm">
              <Column>
                <p className="subheading-2">Avg. Distance</p>
                <p className="subheading-1">{destination.distance}</p>
              </Column>
              <Column>
                <p className="subheading-2">Est. Travel Time</p>
                <p className="subheading-1">{destination.travel}</p>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
}
