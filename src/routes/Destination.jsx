import { dataFile } from "../shared/globals";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import TabLink from "../components/TabLink";
import styles from "../styles/pages/Destination.module.css";
import PageHeading from "../components/PageHeading";
import imgEuropa from "../assets/destination/image-europa.png";
import imgMars from "../assets/destination/image-mars.png";
import imgMoon from "../assets/destination/image-moon.png";
import imgTitan from "../assets/destination/image-titan.png";

const images = [imgMoon, imgMars, imgEuropa, imgTitan];

async function fetchData() {
  const data = dataFile;

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
        className={`${styles.container} row-gap-xs row-gap-md-xl mx-auto justify-center align-center align-lg-end flex-lg-row mg-top-md mg-top-md-xl mg-top-lg-none mg-top-wlg-hmd-xl mg-top-wlg-hlg-xxl pd-btm-lg pd-btm-md-xl`}
      >
        {!destinations[activeDestinationIndex] ? (
          <p>Loading...</p>
        ) : (
          <img
            className={`${styles.illustration}`}
            src={images[activeDestinationIndex]}
            alt={destinations[activeDestinationIndex].name}
          />
        )}

        <Column className="row-gap-xs row-gap-lg-3xs row-gap-wlg-hlg-md align-center justify-between align-lg-start">
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
                <h2 className="heading-2">
                  {destinations[activeDestinationIndex].name}
                </h2>
                <p>{destinations[activeDestinationIndex].description}</p>
                <hr className="mg-top-sm mg-top-md-lg mg-top-lg-3xs mg-top-wlg-hmd-sm mg-top-wlg-hlg-xl" />
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
