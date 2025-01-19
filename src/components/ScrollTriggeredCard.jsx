import { motion } from "motion/react";
import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ToggleBtn from "./ToggleBtn";
import { link } from "motion/react-client";
import { red } from "@mui/material/colors";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  width: "100%",
};

const notCardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 10,
  width: "100%",
  maxWidth: "600px",
  margin: "2rem 0",
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

// Updated image styling to maintain aspect ratio
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

export default function Card({
  i,
  img,
  headline,
  paragraph,
  tech,
  link,
  on,
  attention,
}) {
  const [alignment, setAlignment] = useState("description");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const background = i % 2 === 0 ? "#FFE31A" : "#00ADB5";

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
        gap: { md: "1rem" },
        px: { md: "4rem" },
      }}
      component={"li"}
    >
      <motion.div
        className={`card-container-${i}`}
        style={isMobile ? cardContainer : notCardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div style={{ ...splash, background }} />
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
        borderRadius={"0.8rem"}
        overflow={"hidden"}
        sx={{
          width: { xs: "100%", md: "50%" },
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

          <Typography variant="caption" justifySelf={"start"}>
            Start on: {on}
          </Typography>
          {attention && (
            <Typography variant="caption" justifySelf={"end"} color={red[300]}>
              Attention: {attention}
            </Typography>
          )}
        </Box>

        {/* //*toggle btn */}
        <ToggleBtn alignment={alignment} setAlignment={setAlignment} />

        <Box padding={"0  0.8em 0.8em 1.2em"}>
          {alignment === "description" &&
            paragraph?.map((item, i) => (
              <React.Fragment key={i}>
                <Typography paddingTop={"0.5em"}>{item.sec}</Typography>
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
