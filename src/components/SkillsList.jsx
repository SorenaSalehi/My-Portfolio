import { Box, Button } from "@mui/material";
import React from "react";

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
  return (
    <Box
      display={"flex"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={"center"}
      marginBottom={3}
    >
      {skills.map((item) => (
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
          <Box component={"div"} className="skill-button" bgcolor={item.bg}>
            <div class="a l"></div>
            <div class="a r"></div>
            <div class="a t"></div>
            <div class="a b"></div>
            <div class="skill-text">{item.sk}</div>
          </Box>
        </>
      ))}
    </Box>
  );
}
