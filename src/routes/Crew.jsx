import { dataFile } from "../shared/globals";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import Row from "../components/Layout/Row";
import CarouselControl from "../components/CarouselControl";
import styles from "../styles/pages/Crew.module.css";
import PageHeading from "../components/PageHeading";

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

      <PageHeading number="02">Meet your crew</PageHeading>

      <Column
        className={`${styles.container} mx-auto justify-between row-gap-xs flex-md-col-reverse flex-lg-row-reverse mg-top-sm mg-top-md-xl mg-top-lg-xxl mg-top-wlg-hmd-4xl pd-btm-xl pd-btm-xl-lg`}
      >
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
          <hr className="d-md-none" />
        </Column>

        <Column className="row-gap-xs justify-between flex-md-col-reverse align-lg-start row-gap-lg-xxl row-gap-xl-lg row-gap-wlg-hmd-xl">
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

          <Column className="row-gap-xxs row-gap-wlg-hmd-sm">
            <Column className="row-gap-3xs row-gap-wlg-hmd-xxs">
              <p className="heading-4">
                {crewMembers[activeCrewMemberIndex]
                  ? crewMembers[activeCrewMemberIndex].role
                  : "loading.."}
              </p>
              <h2 className="heading-3">
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
