import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const about = [
    {
        sec: "Art and creativity have always been my north star,",
    },
    {
        sec: "And the web—alive and interactive—felt like the perfect canvas.",
    },

    {
        sec: "After earning my Software Engineering degree,",
    },
    {
        sec: "I doubled-down on the part I loved most—the front-end.",
    },
    {
        sec: "To sharpen the craft, I built nine pure-JavaScript as experiments.",
    },
    {
        sec: "Curiosity led me to React, TypeScript, and Next.js, where structure meets imagination.",
    },
    {
        sec: "Soon I was shipping production UIs: an e-commerce marketplace for gamers,",
    },
    {
        sec: "A legal-case dashboard lawyers actually enjoy using, AI tools that turn sentences into code,",
    },
    {
        sec: "And Web3 mini-apps that make crypto feel simple.",
    },
    {
        sec: "Today, I still chase that spark: watching an idea morph from sketch to live site",
    },
    {
        sec: "And seeing real users click, scroll, and smile.",
    },

    {
        sec: "Browse around, peek at the code, and tell me what sparks your imagination;",
    },
    {
        sec: "I’d love to craft the next story together.",
    },
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
