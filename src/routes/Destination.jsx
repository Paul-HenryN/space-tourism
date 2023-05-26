import Column from "../components/Layout/Column";
import Row from "../components/Layout/Row";
import { useEffect, useState } from "react";
import styles from "../styles/pages/Destination.module.css";

async function fetchData(destinationName) {
  let newDestination;

  await fetch("./src/data.json")
    .then((response) => response.json())
    .then((data) => {
      for (const destination of data.destinations) {
        if (destination.name.toLowerCase() === destinationName.toLowerCase()) {
          console.log(destination);
          newDestination = destination;
          break;
        }
      }
    });

  return newDestination;
}

export default function Destination() {
  let destinationName = "moon";
  let [destination, setDestination] = useState({});

  useEffect(() => {
    fetchData(destinationName).then(setDestination);
  }, [destinationName]);

  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <Column>
        <h2 className="heading-2">Pick your destination</h2>
        <img
          src={`./src/${
            destination && destination.images && destination.images.png
          }`}
          alt={destination.name}
        />
      </Column>

      <Column>
        <ul role="menu">
          <li>Moon</li>
          <li>Mars</li>
          <li>Europa</li>
          <li>Titan</li>
        </ul>

        <Column>
          <h1 className="heading-1">{destination && destination.name}</h1>
          <p>{destination && destination.description}</p>
        </Column>

        <Column>
          <hr />
          <Row>
            <Column>
              <p className="subheading-2">Avg. Distance</p>
              <p className="subheading-1">{destination.distance}</p>
            </Column>
            <Column>
              <p className="subheading-2">Est. Travel Time</p>
              <p className="subheading-1">{destination.travel}</p>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
}
