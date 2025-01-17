import { Box } from "@mui/material";
import React from "react";
import Title from "./Title";

export default function Fallback() {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      // bgcolor={colorLibrary.bgPrimary}
    >
      <Title loading={"..."} />
    </Box>
  );
}
