import { Box, styled } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

export default function SkillsLoader() {
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
    >
      <div class="loader">
        <p>Skills Summary:</p>
        <div class="words">
          <span class="word">JS</span>
          <span class="word">React</span>
          <span class="word">MUI</span>
          <span class="word">Tailwind</span>
          <span class="word">JS</span>
        </div>
      </div>
    </motion.div>
  );
}
