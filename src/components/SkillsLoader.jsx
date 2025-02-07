import { Box, styled } from "@mui/material";
import React from "react";
import { motion } from "motion/react";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function SkillsLoader() {
  const { mode, theme } = useCustomTheme();

  return (
    <motion.div
      margin={"0 0 0 5%"}
      key="title"
      initial={{ opacity: 0, scaleX: 0.8 }}
      animate={{
        opacity: 1,
        scaleX: 1,
        transition: { delay: 1, duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        scaleX: 0.8,
        transition: { delay: 1.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      style={{
        backgroundColor: !mode && theme.palette.text.secondary,
        borderRadius: "1rem",
        padding: "1rem 2rem",
      }}
    >
      <div className="loader">
        <p>Skills Summary:</p>
        <div className="words">
          <span className="word">JS</span>
          <span className="word">React</span>
          <span className="word">MUI</span>
          <span className="word">TS</span>
          <span className="word">JS</span>
        </div>
      </div>
    </motion.div>
  );
}
