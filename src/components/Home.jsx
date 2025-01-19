import { Box } from "@mui/material";
import React, { lazy } from "react";

import Header from "./Header";
import AboutMe from "./AboutMe";

const ScrollTriggered = lazy(() => import("./ScrollTriggered"));
const Nav = lazy(() => import("./Nav"));
const BottomNav = lazy(() => import("./BottomNav"));

export default function Home() {
  return (
    <Box position={"relative"}>
      <Nav />

      <Header />

      <AboutMe />
      <Box component={"div"} className="cards-container">
        <ScrollTriggered />
      </Box>
      <BottomNav />
    </Box>
  );
}
