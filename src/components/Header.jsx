import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

import Title from "./Title";
import SkillsLoader from "./SkillsLoader";
import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "motion/react";

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  return (
    <Box
      component={"div"}
      className="container"
      bgcolor={"background.header"}
      ref={ref}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      gap={4}
      padding={"5rem 0"}
      position={"relative"}
      height={"100vh"}
    >
      <AnimatePresence>
        {inView && (
          <>
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
              />
            </Box>

            <Title />

            <SkillsLoader />
          </>
        )}
      </AnimatePresence>
      <Typography
        position={"absolute"}
        bottom={0}
        borderBottom={1}
        letterSpacing={2}
        fontFamily={"'Jersey 15', serif"}
        variant="h4"
      >
        Where Did it Start?
      </Typography>
    </Box>
  );
}
