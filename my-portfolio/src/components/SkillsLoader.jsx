import { Box, styled } from "@mui/material";
import React from "react";

export default function SkillsLoader() {
  return (
    /* From Uiverse.io by kennyotsu */
    <Box sx={{ margin: "0 0 0 10%" }}>
      <div className="card">
        <div className="loader">
          <p>Skills Summary:</p>
          <div class="words">
            <span class="word">HTML5</span>
            <span class="word">CSS3</span>
            <span class="word">JS</span>
            <span class="word">React.js</span>
            <span class="word">MUI</span>
            <span class="word">Tailwind css</span>
          </div>
        </div>
      </div>
    </Box>
  );
}
