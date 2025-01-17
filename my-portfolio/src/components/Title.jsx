import { Box, Typography } from "@mui/material";
import React from "react";

export default function Title({ loading }) {
  return (
    <Box display={"flex"}>
      <div className="wrapper">
        <div class="bg"> Sorena </div>
        <div class="fg"> Sorena </div>
      </div>
      <Typography
        textAlign={"right"}
        color="text.secondary"
        letterSpacing={2}
        fontWeight={700}
        variant="h6"
        alignSelf={"end"}
        marginLeft={1}
      >
        Salehi
      </Typography>
    </Box>
  );
}
