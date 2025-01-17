import { motion } from "motion/react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

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
  // boxShadow:
  //   "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "-55% 60%",
};

export default function Card({ img, sticker, headline, paragraph, i }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const background = `${i % 2 === 0 ? green : red}`;

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
        // bgcolor={colorLibrary.bgSecondary}
        margin={"1rem 0.5rem"}
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
          justifyContent={"center"}
          alignItems={"center"}
          // bgcolor={colorLibrary.bgPrimaryLight}
        >
          <Typography
            variant="h5"
            // color={colorLibrary.title}
            textAlign={"center"}
            my={"1rem"}
            px={"1rem"}
          >
            {headline}
          </Typography>
          <Box
            component="img"
            src={sticker}
            alt={headline}
            sx={{
              height: "3rem",
              width: "auto",
              maxWidth: "100%",
              paddingRight: "1rem",
            }}
          />
        </Box>

        <Typography
          variant="h6"
          // color={colorLibrary.text}
          textAlign={"match-parent"}
          padding={"1rem"}
          mx={"0.5rem"}
          // bgcolor={colorLibrary.bgSecondary1}
          borderRadius={"0.5rem"}
        >
          {paragraph}
        </Typography>
      </Box>
    </Box>
  );
}
