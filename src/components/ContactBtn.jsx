import { Box } from "@mui/material";
import React from "react";

export default function ContactBtn() {
  return (
    <Box>
      <button type="button" class="button">
        <div class="button-top" style={{ fontSize: "clamp(0.3rem,2vw,1rem)" }}>
          Contact Me
        </div>
        <div class="button-bottom"></div>
        <div class="button-base"></div>
      </button>
    </Box>
  );
}
