import { Box } from "@mui/material";
import React from "react";

export default function ContactBtn() {
  return (
    <Box>
      <button type="button" class="button" style={{ fontSize: "2rem" }}>
        <div class="button-top" style={{ fontSize: "2vw" }}>
          Contact Me
        </div>
        <div class="button-bottom"></div>
        <div class="button-base"></div>
      </button>
    </Box>
  );
}
