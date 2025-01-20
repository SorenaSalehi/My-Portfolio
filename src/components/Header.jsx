import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

import Title from "./Title";
import SkillsLoader from "./SkillsLoader";
import SkillsList from "./SkillsList";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function Header() {
  const { theme } = useCustomTheme();
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
  return (
    <Box
      component={"div"}
      bgcolor={"background.header"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      gap={4}
      padding={"5rem 0"}
      position={"relative"}
      height={"max-content"}
      sx={{
        backgroundImage: `linear-gradient(32deg, ${theme.palette.background.headerFade} 30px, transparent)`,
        backgroundSize: "60px 60px",
        backgroundPosition: "-5px -5px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1" : "repeat(2,auto)",
          gridTemplateRows: isMobile ? "repeat(3,auto)" : "repeat(2,auto)",
          px: isMobile ? 0 : "10%",
          justifyItems: "center",
        }}
      >
        <Box
          width={"50%"}
          borderRadius={"1rem"}
          overflow={"hidden"}
          position={"relative"}
        >
          <motion.img
            loading="lazy"
            component="img"
            alt="sorena-img"
            src="/myImg.webp"
            width={"100%"}
            height={"auto"}
            style={{
              objectFit: "cover",
              opacity: 0.9,
            }}
            key="img"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              y: 50,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          />
        </Box>

        <Title />

        <SkillsLoader />
      </Box>

      <SkillsList />

      <Typography
        position={"absolute"}
        bottom={0}
        borderBottom={1}
        borderColor={"primary.main"}
        letterSpacing={2}
        fontFamily={"'Jersey 15', serif"}
        fontSize={"5vw"}
      >
        Where Did it Start?
      </Typography>
    </Box>
  );
}
