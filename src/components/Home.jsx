import { Backdrop, Box } from "@mui/material";
import React from "react";

import Nav from "./Nav";
import Header from "./Header";
import AboutMe from "./AboutMe";
import ScrollTriggered from "./ScrollTriggered";
import BottomNav from "./BottomNav";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function Home() {
  const { mode } = useCustomTheme();

  const { isContactOptionOpen, handleCloseContactOption } = useCustomTheme();
  return (
    <Box
      height={"100vh"}
      component={"main"}
      className="main"
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <Backdrop
        open={isContactOptionOpen}
        sx={{
          bgcolor: "background.backdrop",
          zIndex: 100,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        onClick={handleCloseContactOption}
      />
      <Nav />

      <Header />

      <AboutMe />
      <Box
        component={"div"}
        className={mode ? "card-container" : "bg-header-light"}
      >
        <ScrollTriggered />
      </Box>
      <BottomNav />
    </Box>
  );
}
