import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function DarkModeBtn() {
  const { handleChange } = useCustomTheme();

  return (
    <Box
      sx={{ position: "fixed", bottom: "clamp(0.9rem,1vh,2rem)", left: "3vw" }}
    >
      <label className="switch">
        <input className="cb" type="checkbox" />
        <span className="toggle" onClick={handleChange}>
          <span className="left">off</span>
          <span className="right">on</span>
        </span>
      </label>
    </Box>
  );
}
