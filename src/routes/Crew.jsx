import { dataFile } from "../shared/globals";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import Row from "../components/Layout/Row";
import CarouselControl from "../components/CarouselControl";
import styles from "../styles/pages/Crew.module.css";

async function fetchData() {
  const response = await fetch(dataFile);
  const data = await response.json();

  return data.crew;
}

export default function Crew() {
  let [activeCrewMemberIndex, setActiveCrewMemberIndex] = useState(0);
  let [crewMembers, setCrewMembers] = useState([]);

  useEffect(() => {
    fetchData().then(setCrewMembers);
  }, []);

  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <h1 className="page-heading mg-btm-sm">Meet your crew</h1>

      <Column className={`${styles.container} mx-auto row-gap-xs`}>
        <Column className="align-center">
          {crewMembers[activeCrewMemberIndex] ? (
            <img
              className={styles.illustration}
              src={`./src/${crewMembers[activeCrewMemberIndex].images.png}`}
              alt={crewMembers[activeCrewMemberIndex].name}
            />
          ) : (
            <p>Loading...</p>
          )}
          <hr />
        </Column>

        <Column className="row-gap-xs">
          <Row className="col-gap-xxs justify-center">
            {crewMembers.map((crewMember, i) => (
              <CarouselControl
                active={activeCrewMemberIndex === i}
                key={`control${i}`}
                onClick={() => {
                  setActiveCrewMemberIndex(i);
                }}
              />
            ))}
          </Row>

          <Column className="row-gap-xxs">
            <Column className="row-gap-3xs">
              <p className="heading-4">
                {crewMembers[activeCrewMemberIndex]
                  ? crewMembers[activeCrewMemberIndex].role
                  : "loading.."}
              </p>
              <h2>
                {crewMembers[activeCrewMemberIndex]
                  ? crewMembers[activeCrewMemberIndex].name
                  : "loading..."}
              </h2>
            </Column>

            <p>
              {crewMembers[activeCrewMemberIndex]
                ? crewMembers[activeCrewMemberIndex].bio
                : "loading..."}
            </p>
          </Column>
        </Column>
      </Column>
    </>
  );
}
