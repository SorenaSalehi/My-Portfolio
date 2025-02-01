import { Box } from "@mui/material";
import React from "react";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function ContactBtn() {
  const { handleOpenContactOption } = useCustomTheme();

  return (
    <Box component={"div"} onClick={handleOpenContactOption}>
      <div className="button">
        <div
          className="button-top"
          style={{ fontSize: "clamp(0.6rem,2vw,1rem)" }}
        >
          Contact Me
        </div>
        <div className="button-bottom"></div>
        <div className="button-base"></div>
      </div>
    </Box>
  );
}
