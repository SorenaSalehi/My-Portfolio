import { motion } from "motion/react";
import React, { useState } from "react";

import {
    Box,
    Divider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ToggleBtn from "./ToggleBtn";

const mobileCard = {
    fontSize: 164,
    width: 200,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    transformOrigin: "-55% 60%",
};

export default function Card({ i, img, headline, paragraph, tech, link, on }) {
    const [alignment, setAlignment] = useState("description");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const cardVariants = {
        offscreen: {
            y: 300,
        },
        onscreen: {
            y: i % 2 === 0 ? 50 : 10,
            rotate: i % 2 === 0 ? -13 : 0,
            transition: {
                type: "spring",
                bounce: i % 2 === 0 ? 0.5 : 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <Box
            sx={{
                marginBottom: "1rem",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: i % 2 === 0 ? "row" : "row-reverse",
                },
                justifyContent: { md: "space-between" },
                alignItems: "center",
                gap: isMobile ? 0 : "1rem",
                px: { md: "2rem" },
            }}
            component={"li"}
        >
            <motion.div
                className={`card-container-${i}`}
                style={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    paddingTop: 20,
                    width: "100%",
                    maxWidth: { md: "600px" },
                }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.8 }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "50%",
                        borderRadius: isMobile
                            ? "10rem 1rem 0 0"
                            : "5rem 1rem 0.4rem 0.4rem",
                        backgroundColor: "background.secondaryFade",
                        boxShadow: "-25px -1px 20px 5px rgb(4, 65, 14,0.3)",
                    }}
                />
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <motion.img
                        loading="lazy"
                        style={mobileCard}
                        variants={cardVariants}
                        className="card"
                        src={img}
                        alt={headline}
                    />
                </Box>
            </motion.div>

            <Box
                component={"div"}
                bgcolor={"background.secondary"}
                borderRadius={isMobile ? 0 : "0.8rem"}
                overflow={"hidden"}
                position={"relative"}
                sx={{
                    width: { xs: "100%", md: "150%" },
                    maxWidth: { md: "600px" },
                    height: "auto",
                }}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Typography
                        variant="h4"
                        textAlign={"center"}
                        my={"1rem"}
                        px={"1rem"}
                        fontFamily={"'Jersey 15', serif"}
                    >
                        {headline}
                    </Typography>
                </Box>

                {/* //*toggle btn */}
                <ToggleBtn alignment={alignment} setAlignment={setAlignment} />

                <Box padding={"0  0.8em 0.8em 1.2em"}>
                    {alignment === "description" &&
                        paragraph?.map((item, i) => (
                            <React.Fragment key={i}>
                                <Typography paddingTop={"0.5em"}>
                                    {item.sec}
                                </Typography>
                                <Divider
                                    variant="fullWidth"
                                    sx={{ borderColor: "#578E7E77" }}
                                />
                            </React.Fragment>
                        ))}
                    {alignment === "technologies" && (
                        <Typography variant="h6" paddingTop={"0.5em"}>
                            {tech}
                        </Typography>
                    )}{" "}
                    {alignment === "link" && (
                        <Box paddingTop={"0.5em"}>
                            <Typography
                                component={"a"}
                                href={link}
                                sx={{ fontSize: "1.5em", color: "#578E7E" }}
                            >
                                {headline.split(":")[1]}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
