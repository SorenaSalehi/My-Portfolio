import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { lazy } from "react";

import Header from "./Header";
import ScrollBtn from "./ScrollBtn";

const ScrollTriggered = lazy(() => import("./ScrollTriggered"));
const Nav = lazy(() => import("./Nav"));
const BottomNav = lazy(() => import("./BottomNav"));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box position={"relative"}>
      <Nav />

      <Header />
      <ScrollTriggered />
      {isMobile && <ScrollBtn />}
      <BottomNav />
    </Box>
  );
}
