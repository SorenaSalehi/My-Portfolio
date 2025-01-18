import { Box } from "@mui/material";
import React, { lazy } from "react";
const ContactBtn = lazy(() => import("./ContactBtn"));

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
        justifyContent: "flex-end",
        backgroundColor: "Background.paperFade",
        backdropFilter: "blur(8px)",
        zIndex: 10,
        backgroundImage: `radial-gradient(circle, ${"#578E7E99"} 0.1rem, transparent 0.1rem)`,
        backgroundSize: "8px 8px",
      }}
      component="nav"
      id="bottomNav"
    >
      <ContactBtn />
    </Box>
  );
}
