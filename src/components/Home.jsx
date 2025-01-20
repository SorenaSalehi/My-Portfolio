import { Box } from "@mui/material";
import React from "react";

import Nav from "./Nav";
import Header from "./Header";
import AboutMe from "./AboutMe";
import ScrollTriggered from "./ScrollTriggered";
import BottomNav from "./BottomNav";

export default function Home() {
  return (
    <Box
      // height={"100vh"}
      height={"100vh"}
      component={"main"}
      className="main"
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
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
