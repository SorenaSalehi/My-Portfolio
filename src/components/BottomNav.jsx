import { Box } from "@mui/material";
import React from "react";

import ContactBtn from "./ContactBtn";
import DarkModeBtn from "./DarkModeBtn";

export default function BottomNav() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "Background.paperFade",
        backdropFilter: "blur(8px)",
        zIndex: 100,
        backgroundImage: `radial-gradient(circle, ${"#578E7E99"} 0.1rem, transparent 0.1rem)`,
        backgroundSize: "8px 8px",
        paddingLeft: 1,
      }}
      component="nav"
      id="bottomNav"
    >
      <DarkModeBtn />
      <ContactBtn />
    </Box>
  );
}
