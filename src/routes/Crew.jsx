import { dataFile } from "../shared/globals";
import { useEffect, useState } from "react";
import Column from "../components/Layout/Column";
import Row from "../components/Layout/Row";
import styles from "../styles/pages/Crew.module.css";

async function fetchData(activeCrewMemberIndex) {
  const response = await fetch(dataFile);
  const data = await response.json();

  return data.crew[activeCrewMemberIndex];
}

export default function Crew() {
  let [activeCrewMemberIndex, setActiveCrewMemberIndex] = useState(2);
  let [activeCrewMember, setActiveCrewMember] = useState({});

  useEffect(() => {
    fetchData(activeCrewMemberIndex).then(setActiveCrewMember);
  }, [activeCrewMemberIndex]);

  return (
    <>
      <div className={`${styles.bg} wallpaper`} />

      <h1 className="page-heading">Meet your crew</h1>

      <Column>
        <Column>
          {activeCrewMember.images ? (
            <img
              src={`./src/${activeCrewMember.images.png}`}
              alt={activeCrewMember.name}
            />
          ) : (
            <p>Loading...</p>
          )}
          <hr />
        </Column>

        <Column>
          <Row className="col-gap-sm justify-center">
            <button
              className="txt-secondary"
              onClick={() => {
                setActiveCrewMemberIndex(0);
              }}
            >
              1
            </button>
            <button
              className="txt-secondary"
              onClick={() => {
                setActiveCrewMemberIndex(1);
              }}
            >
              2
            </button>
            <button
              className="txt-secondary"
              onClick={() => {
                setActiveCrewMemberIndex(2);
              }}
            >
              3
            </button>
            <button
              className="txt-secondary"
              onClick={() => {
                setActiveCrewMemberIndex(3);
              }}
            >
              4
            </button>
          </Row>

          <Column>
            <Column>
              <p>{activeCrewMember.role}</p>
              <h2>{activeCrewMember.name}</h2>
            </Column>

            <p>{activeCrewMember.bio}</p>
          </Column>
        </Column>
      </Column>
    </>
  );
}
