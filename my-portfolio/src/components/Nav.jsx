import { Box } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "Background.paperFade",
        backdropFilter: "blur(8px)",
        zIndex: 10,
        backgroundImage: `radial-gradient(circle, ${"#578E7E99"} 0.1rem, transparent 0.1rem)`,
        backgroundSize: "8px 8px",
      }}
    ></Box>
  );
}
