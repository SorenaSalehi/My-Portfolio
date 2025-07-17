import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const about = [
    {
        sec: "Art and creativity have always inspired me, and front-end development naturally captured my attention.",
    },
    {
        sec: "After pushing through a challenging personal chapter and finishing my Software Engineering degree,",
    },
    { sec: "I chose to chase that spark on the front-end path." },
    {
        sec: "I first sharpened my skills with roughly nine hands-on JavaScript projects.",
    },
    { sec: "Eager for more, I dove into React, TypeScript, and Next.js," },
    { sec: "where I found the perfect blend of logic and visual expression." },
    {
        sec: "Below, you’ll see a selection of projects I’ve designed and built—",
    },
    {
        sec: "some for forward-thinking companies, others for my own creative exploration.",
    },
    { sec: "I’d love to hear what you think!" },
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
