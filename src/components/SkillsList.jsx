import { Box } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

import { useCustomTheme } from "../context/CustomThemeProvider";

const skills = [
    {
        sk: "HTML5",
        bg: "#a63707",
        color: "#FFF8F0",
        icon: "/html.png",
    },
    {
        sk: "CSS3",
        bg: "#06497b",
        color: "#FFF8F0",
        icon: "/css.png",
    },
    {
        sk: "JavaScript",
        bg: "#bd9f06",
        color: "#FFF8F0",
        icon: "/js.png",
    },
    {
        sk: "React",
        bg: "#024c59",
        color: "#FFF8F0",
        icon: "/react.png",
    },
    {
        sk: "Next",
        bg: "#000c0e",
        color: "#FFF8F0",
        icon: "/next.svg",
    },
    {
        sk: "TypeScript",
        bg: "#044977",
        color: "#FFF8F0",
        icon: "/ts.png",
    },
    {
        sk: "MaterialUI",
        bg: "#013f7d",
        color: "#FFF8F0",
        icon: "/mui.png",
    },
    {
        sk: "Tailwind",
        bg: "#157274",
        color: "#FFF8F0",
        icon: "/tailwind.png",
    },
    {
        sk: "Bootstrap",
        bg: "#6E2CF4",
        color: "#FFF8F0",
        icon: "/bootstrap.svg",
    },
    {
        sk: "Redux",
        bg: "#30204a",
        color: "#FFF8F0",
        icon: "/redux.png",
    },
    {
        sk: "Github",
        bg: "#3b6cb1",
        color: "#FFF8F0",
        icon: "/github.png",
    },
    {
        sk: "Git",
        bg: "#7f290f",
        color: "#FFF8F0",
        icon: "/git.png",
    },
    {
        sk: "vite",
        bg: "#796DD4",
        color: "#FFF8F0",
        icon: "/vite.png",
    },
    {
        sk: "Context-api",
        bg: "#024c59",
        color: "#FFF8F0",
        icon: "/react.png",
    },
    {
        sk: "React-Query",
        bg: "#8a2c35",
        color: "#FFF8F0",
        icon: "/query.png",
    },
    {
        sk: "React-Hook-Form",
        bg: "#66293f",
        color: "#FFF8F0",
        icon: "/form.png",
    },
    {
        sk: "React-Router-Dom",
        bg: "#860413",
        color: "#FFF8F0",
        icon: "/router.png",
    },
    {
        sk: "Restful-api",
        bg: "#025e3b",
        color: "#FFF8F0",
        icon: "/api.png",
    },
    {
        sk: "Motion-React",
        bg: "#330882",
        color: "#FFF8F0",
        icon: "/motion.png",
    },
    {
        sk: "Styled-Component",
        bg: "#90783d",
        color: "#FFF8F0",
    },
    {
        sk: "Supabase",
        bg: "#1e5f42",
        color: "#FFF8F0",
        icon: "/supabase.png",
    },
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
                            <Box
                                sx={{
                                    width: "1.5em",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {item.icon ? (
                                    <img
                                        src={item.icon}
                                        loading="lazy"
                                        width={"80%"}
                                        // height={"20%"}
                                    />
                                ) : (
                                    "💅"
                                )}
                            </Box>
                            {item.sk}
                        </div>
                    </motion.div>
                </React.Fragment>
            ))}
        </Box>
    );
}
