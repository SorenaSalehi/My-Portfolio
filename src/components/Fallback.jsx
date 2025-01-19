import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "./Title";

export default function Fallback() {
  return (
    <Box
      component={"div"}
      className="container"
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#0a120e"}
      color={"#FFE31A"}
    >
      <Typography variant="h2" fontFamily={"'Jersey 15', serif"}>
        JS
      </Typography>
      <div class="loading">
        <svg width="64px" height="48px">
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="back"
          ></polyline>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="front"
          ></polyline>
        </svg>
      </div>
      <Typography variant="h4" fontFamily={"'Jersey 15', serif"}>
        React
      </Typography>
    </Box>
  );
}
