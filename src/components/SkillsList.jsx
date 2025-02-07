import { Box } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

import { useCustomTheme } from "../context/CustomThemeProvider";

const skills = [
  { sk: "HTML5", bg: "#F16A30", color: "#FFF8F0" },
  { sk: "CSS3", bg: "#0870C2", color: "#FFF8F0" },
  { sk: "JavaScript", bg: "#F7CF00", color: "#1E1E24" },
  { sk: "ReactJs", bg: "#08DAFF", color: "#1E1E24" },
  { sk: "TypeScript", bg: "#087ECE", color: "#FFF8F0" },
  { sk: "MaterialUI", bg: "#0061C2", color: "#FFF8F0" },
  { sk: "Tailwind", bg: "#20B9BC", color: "#1E1E24" },
  { sk: "Redux", bg: "#7A50BE", color: "#FFF8F0" },
  { sk: "Github", bg: "#4479C5", color: "#FFF8F0" },
  { sk: "Git", bg: "#4479C5", color: "#FFF8F0" },
  { sk: "vite", bg: "#796DD4", color: "#FFF8F0" },
  { sk: "Context-api", bg: "#08D8FC", color: "#0a120e" },
  { sk: "React-Query", bg: "#FF4759", color: "#FFF8F0" },
  { sk: "React-Hook-Form", bg: "#ED5E93", color: "#0a120e" },
  { sk: "React-Router-Dom", bg: "#D10A22", color: "#FFF8F0" },
  { sk: "Restful-api", bg: "#089E65", color: "#FFF8F0" },
  { sk: "Motion-React", bg: "#620CFE", color: "#FFF8F0" },
  { sk: "Styled-Component", bg: "#FFD568", color: "#0a120e" },
  { sk: "Supabase", bg: "#37B37C", color: "#FFF8F0" },
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
        py: !mode ? "1rem" : 0,
        mx: !mode ? "1rem" : 0,
      }}
    >
      {skills.map((item, i) => (
        <React.Fragment key={i}>
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

          <div className="skill-backdrop"></div>
          <motion.div
            className="skill-button"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: item.bg,
              transition: { delay: i * 0.5, duration: 0.5 },
            }}
          >
            <div className="a l"></div>
            <div className="a r"></div>
            <div className="a t"></div>
            <div className="a b"></div>
            <div
              className="skill-text"
              style={{
                fontSize: "clamp(0.6rem,2vw,1.5rem)",
                fontWeight: 500,
                color: item.color,
              }}
            >
              {item.sk}
            </div>
          </motion.div>
        </React.Fragment>
      ))}
    </Box>
  );
}
