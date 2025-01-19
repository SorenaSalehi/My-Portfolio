import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "../context/CustomThemeProvider";

export default function DarkModeBtn() {
  const { handleChange } = useTheme();

  return (
    <Box>
      <label class="switch">
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
