import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Box } from "@mui/material";

export default function ScrollBtn() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Distance scrolled from the top
      const fadeOutHeight = 100; // Adjust this value as needed

      // Calculate opacity based on scroll position
      const newOpacity = 1 - Math.min(scrollTop / fadeOutHeight, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* From Uiverse.io by mrhyddenn */

  return (
    <Box component="div" className="scrolldown" sx={{ opacity }}>
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </Box>
  );
}
