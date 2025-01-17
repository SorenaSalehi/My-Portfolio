import { Box } from "@mui/material";
import React from "react";

import Title from "./Title";
import SkillsLoader from "./SkillsLoader";
import AnimatedText from "./AnimateText";

export default function Header() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={3}
      padding={"5rem 0 1rem"}
      position={"relative"}
    >
      <Box
        width={"50%"}
        borderRadius={"1rem"}
        overflow={"hidden"}
        position={"relative"}
      >
        <Box
          loading="lazy"
          component="img"
          alt="sorena-img"
          src="/myImg.webp"
          width={"100%"}
          height={"auto"}
          sx={{
            objectFit: "cover",
            opacity: 0.9,
          }}
        />
      </Box>

      <Title />

      <SkillsLoader />
      {/* <AnimatedText text={"LMTH"} /> */}
    </Box>
  );
}
