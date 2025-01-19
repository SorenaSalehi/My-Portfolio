import { Typography } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

export default function Title() {
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
        <div class="bg"> Sorena </div>
        <div class="fg"> Sorena </div>
      </div>
      <Typography
        textAlign={"right"}
        letterSpacing={2}
        fontWeight={700}
        variant="h4"
        alignSelf={"end"}
        marginLeft={1}
        fontFamily={"'Jersey 15', serif"}
      >
        Salehi
      </Typography>
    </motion.div>
  );
}
