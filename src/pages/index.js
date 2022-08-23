import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Category from "../components/Category";
import Overview from "../components/Overview";
import ProfileDesc from "../components/ProfileDesc";
import PopUp from "../components/PopUp";
import Recycle from "../components/Recycle";
import { db, auth, provider } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./login";

function Home() {
  const [signedInUser, setSignedInUser] = useState(null);

  const [popUp, setPopUp] = useState(false);
  const [bigData, setBigData] = useState([]);
  const [cycle, setCycle] = useState(false);

  const [active, setActive] = useState({
    home: true,
    chart: false,
    a: false,
    b: false,
    c: false,
  });

  function handleActive(id) {
    if (id === "home") {
      setActive({
        ...active,
        home: true,
        chart: false,
        a: false,
        b: false,
        c: false,
      });
    } else if (id === "chart") {
      setActive({
        ...active,
        ...active,
        home: false,
        chart: true,
        a: false,
        b: false,
        c: false,
      });
    } else if (id === "a") {
      setActive({
        ...active,
        ...active,
        home: false,
        chart: false,
        a: true,
        b: false,
        c: false,
      });
    } else if (id === "b") {
      setActive({
        ...active,
        ...active,
        home: false,
        chart: false,
        a: false,
        b: true,
        c: false,
      });
    } else if (id === "c") {
      setActive({
        ...active,
        ...active,
        home: false,
        chart: false,
        a: false,
        b: false,
        c: true,
      });
    } else {
      setActive({
        ...active,
        home: false,
        chart: false,
        a: false,
        b: false,
        c: false,
      });
    }
  }

  for (var i = 0; i < bigData.length; i++) {
    // oldest to newest
    if (bigData[i + 1]?.timestamp < bigData[i]?.timestamp) {
      var temp = bigData[i];
      bigData[i] = bigData[i + 1];
      bigData[i + 1] = temp;
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedInUser(user);
      } else {
        setSignedInUser(null);
      }
    });
  }, [signedInUser]);

  if (!signedInUser) return <Login />;
  console.log(signedInUser);
  return (
    <>
      <Container>
        <Container__Inner>
          <Sidebar
            active={active}
            setActive={setActive}
            handleActive={handleActive}
          />
          {active.home && (
            <AppContent>
              <AppContent__Inner>
                <Category cycle={cycle} />
                <Overview
                  popUp={popUp}
                  setPopUp={setPopUp}
                  bigData={bigData}
                  setBigData={setBigData}
                  cycle={cycle}
                />
                <ProfileDesc activeChart={active.chart} />
              </AppContent__Inner>
              <Recycle cycle={cycle} setCycle={setCycle} />
            </AppContent>
          )}
          {active.chart && <ProfileDesc activeChart={active.chart} />}
        </Container__Inner>
      </Container>

      {popUp && (
        <>
          <PopUp
            popUp={popUp}
            setPopUp={setPopUp}
            bigData={bigData}
            setBigData={setBigData}
          />
        </>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #ffdede;
  padding: 24px 48px 24px 48px;
`;

const Container__Inner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 25px;
  flex-wrap: wrap;
`;

const AppContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  transition: 0.3s all ease-in-out;
`;

const AppContent__Inner = styled.div`
  display: flex;
  height: 100%;
  transition: 0.3s all ease-in-out;
  flex-direction: row;
`;

export default Home;
