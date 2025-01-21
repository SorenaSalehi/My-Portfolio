import { Box } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

import { useCustomTheme } from "../context/CustomThemeProvider";

const skills = [
  { sk: "HTML5", bg: "#F16A30" },
  { sk: "CSS3", bg: "#0870C2" },
  { sk: "vite", bg: "#796DD4" },
  { sk: "React-Query", bg: "#FF4759" },
  { sk: "React-Hook-Form", bg: "#ED5E93" },
  { sk: "Redux", bg: "#7A50BE" },
  { sk: "Context-api", bg: "#08D8FC" },
  { sk: "React-Router-Dom", bg: "#D10A22" },
  { sk: "Restful-api", bg: "#089E65" },
  { sk: "Motion-React", bg: "#620CFE" },
  { sk: "Styled-Component", bg: "#FFD568" },
  { sk: "Supabase", bg: "#37B37C" },
  { sk: "Github", bg: "#4479C5" },
];

export default function SkillsList() {
  const { mode, theme } = useCustomTheme();

  return (
    <Box
      display={"flex"}
      gap={2}
      flexWrap={"wrap"}
      justifyContent={"center"}
      marginBottom={3}
      px={2}
      sx={{
        backgroundColor: !mode && theme.palette.text.secondary,
        borderRadius: "1rem",
        py: !mode && "1rem",
        mx: !mode && "1rem",
      }}
    >
      {skills.map((item, i) => (
        <>
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <filter
              width="3000%"
              x="-1000%"
              height="3000%"
              y="-1000%"
              id="unopaq"
            >
              <feColorMatrix
                values="1 0 0 0 0 
            0 1 0 0 0 
            0 0 1 0 0 
            0 0 0 3 0"
              ></feColorMatrix>
            </filter>
          </svg>

          <div class="skill-backdrop"></div>
          <motion.div
            className="skill-button"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: item.bg,
              transition: { delay: i * 0.5, duration: 0.5 },
            }}
          >
            <div class="a l"></div>
            <div class="a r"></div>
            <div class="a t"></div>
            <div class="a b"></div>
            <div
              class="skill-text"
              style={{ fontSize: "clamp(0.6rem,2vw,1.5rem)", fontWeight: 500 }}
            >
              {item.sk}
            </div>
          </motion.div>
        </>
      ))}
    </Box>
  );
}
