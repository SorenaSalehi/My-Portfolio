import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function DarkModeBtn() {
  const { handleChange } = useCustomTheme();

  return (
    <Box
      onClick={handleChange}
      sx={{ position: "fixed", bottom: "clamp(0.5rem,1vh,2rem)", left: "3vw" }}
    >
      <label class="toggle-switch" for="toggle-switch">
        <input type="checkbox" id="toggle-switch" onClick={handleChange} />
        <div class="slider"></div>
      </label>
    </Box>
  );
}
