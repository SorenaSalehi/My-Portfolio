import { Typography } from "@mui/material";
import React from "react";
import { motion } from "motion/react";
import { useCustomTheme } from "../context/CustomThemeProvider";

export default function Title() {
  const { mode } = useCustomTheme();
  return (
    <motion.div
      display={"flex"}
      key="title"
      initial={{ opacity: 0, scaleX: 0.8 }}
      animate={{
        opacity: 1,
        scaleX: 1,
        transition: { delay: 0.8, duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        x: 100,
        transition: { delay: 0.8, duration: 0.5 },
      }}
      viewport={{ once: true }}
    >
      <div className="wrapper">
        <div className="bg"> Sorena </div>
        <div className="fg"> Sorena </div>
      </div>
      <Typography
        textAlign={"right"}
        letterSpacing={2}
        fontWeight={700}
        variant={mode ? "h4" : "h5"}
        alignSelf={"end"}
        marginLeft={1}
        fontFamily={mode && "'Jersey 15', serif"}
      >
        Salehi
      </Typography>
    </motion.div>
  );
}
