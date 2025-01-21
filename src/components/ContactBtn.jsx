import { Box } from "@mui/material";
import React from "react";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function ContactBtn() {
  const { handleOpenContactOption } = useCustomTheme();

  return (
    <Box component={"div"} onClick={handleOpenContactOption}>
      <button type="button" class="button">
        <div class="button-top" style={{ fontSize: "clamp(0.6rem,2vw,1rem)" }}>
          Contact Me
        </div>
        <div class="button-bottom"></div>
        <div class="button-base"></div>
      </button>
    </Box>
  );
}
