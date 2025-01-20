import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function DarkModeBtn() {
  const { handleChange } = useCustomTheme();
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("md"));

  return (
    <Box>
      <label class="switch" style={{ fontSize: isMobile ? "2vw" : "1vw" }}>
        <input class="cb" type="checkbox" />
        <Box
          bgcolor={"background.paperFade"}
          component={"span"}
          className="toggle"
          onClick={() => handleChange("click")}
          fontFamily={"'Jersey 15', serif"}
        >
          <span class="left">off</span>
          <span class="right">on</span>
        </Box>
      </label>
    </Box>
  );
}
