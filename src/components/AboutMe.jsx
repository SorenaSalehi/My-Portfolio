import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const about = [
  { sec: "In December 2023, I finally found my path." },
  { sec: "I started learning HTML and CSS through YouTube tutorials," },
  { sec: "diving into the world of web development." },
  {
    sec: "Shortly after, I took a JavaScript course by Jonas Schmedtmann on Udemy,",
  },
  { sec: " which included around nine hands-on projects." },
  { sec: "The course fueled my passion," },
  {
    sec: "and I continued my journey by learning React.js with the same incredible instructor.",
  },
  { sec: " Below, you'll find some of the projects " },
  { sec: "I've designed and built on my own." },
  { sec: "I'm eagerly looking forward to hearing your thoughts!" },
];

export default function AboutMe() {
  return (
    <Box
      component={"div"}
      bgcolor={"background.aboutMe"}
      padding={"1rem 1rem 5rem 1rem"}
      height={"max-content"}
    >
      {about.map((item, i) => (
        <React.Fragment key={i}>
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: i * 0.5, duration: 0.8 },
            }}
            viewport={{ once: true, threshold: 1 }}
          >
            <Typography
              sx={{
                fontSize: "clamp(1rem,3vw,2rem)",
                padding: "0.8rem 0.2rem",
                textAlign: "center",
              }}
            >
              {item.sec}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: i * 0.4, duration: 0.6 },
            }}
            viewport={{ once: true }}
          >
            <Divider
              variant="middle"
              sx={{
                borderColor:
                  i < about.length - 1
                    ? "background.paperFade"
                    : "primary.main",
              }}
            />
          </motion.div>
        </React.Fragment>
      ))}
    </Box>
  );
}
