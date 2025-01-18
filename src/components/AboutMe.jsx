import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { red } from "@mui/material/colors";

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
    <Box component={"div"} bgcolor={"background.dark"} paddingBottom={"1rem"}>
      {about.map((item, i) => (
        <React.Fragment key={i}>
          <motion.p
            initial={{ opacity: 0, x: 50, y: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: i + 1, duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: "2.3vw",
                padding: "0.8rem 0.2rem",
                textAlign: "center",
              }}
            >
              {item.sec}
            </Typography>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: i + 0.5, duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
            <Divider
              variant="middle"
              sx={{ borderColor: "background.paperFade" }}
            />
          </motion.div>
        </React.Fragment>
      ))}
    </Box>
  );
}