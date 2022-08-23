import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Container,
  SidebarWrapper,
  SideIcon,
  SideText,
  Logo,
} from "./SidebarElements";
import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { formControlClasses } from "@mui/material";

function Sidebar({ active, setActive, handleActive }) {
  const [hover, setHover] = useState({
    home: false,
    chart: false,
    a: false,
    b: false,
    c: false,
    d: false,
  });

  const [windowWidth, setWindowWidth] = useState(2000);

  function reportWindowSize() {
    setWindowWidth(window.innerWidth);
  }

  window.onresize = reportWindowSize;

  return (
    <>
      <Container>
        <SidebarWrapper>
          <Logo>{windowWidth < 768 ? "ET" : "Expenses Tracker"}</Logo>

          <SideIcon
            onMouseOver={() => setHover({ ...hover, home: true })}
            onMouseOut={() => setHover({ ...hover, home: false })}
            onClick={() => handleActive("home")}
            hover={hover.home}
            active={active.home}
          >
            <HomeIcon />
            <SideText hover={hover.home}>Overview</SideText>
          </SideIcon>

          <SideIcon
            onMouseOver={() => setHover({ ...hover, chart: true })}
            onMouseOut={() => setHover({ ...hover, chart: false })}
            onClick={() => handleActive("chart")}
            hover={hover.chart}
            active={active.chart}
          >
            <BarChartIcon />
            <SideText hover={hover.chart}>Chart</SideText>
          </SideIcon>

          <SideIcon
            onMouseOver={() => setHover({ ...hover, a: true })}
            onMouseOut={() => setHover({ ...hover, a: false })}
            onClick={() => handleActive("a")}
            hover={hover.a}
            active={active.a}
          >
            <EventNoteIcon />
            <SideText hover={hover.a}>Event</SideText>
          </SideIcon>

          <SideIcon
            onMouseOver={() => setHover({ ...hover, b: true })}
            onMouseOut={() => setHover({ ...hover, b: false })}
            onClick={() => handleActive("b")}
            hover={hover.b}
            active={active.b}
          >
            <EventNoteIcon />
            <SideText hover={hover.b}>Event1</SideText>
          </SideIcon>

          <SideIcon
            onMouseOver={() => setHover({ ...hover, c: true })}
            onMouseOut={() => setHover({ ...hover, c: false })}
            onClick={() => handleActive("c")}
            hover={hover.c}
            active={active.c}
          >
            <EventNoteIcon />
            <SideText hover={hover.c}>Event2</SideText>
          </SideIcon>
        </SidebarWrapper>
        <SideIcon
          onMouseOver={() => setHover({ ...hover, d: true })}
          onMouseOut={() => setHover({ ...hover, d: false })}
          hover={hover.c}
          signOutButton={true}
          onClick={() => signOut(auth)}
        >
          <ExitToAppIcon fontSize="large" />
          <SideText hover={hover.d}>Sign Out</SideText>
        </SideIcon>
      </Container>
    </>
  );
}

export default Sidebar;
