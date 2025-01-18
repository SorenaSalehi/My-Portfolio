import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleBtn({ alignment, setAlignment }) {
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      fullWidth
      sx={{
        border: "2px solid #578E7E",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "background.default",

        "& .MuiToggleButton-root": {
          color: "text.primary",
          fontWeight: "bold",
          padding: "10px 20px",

          "&.Mui-selected": {
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          },
          "&:hover": {
            backgroundColor: "action.hover",
          },
        },
      }}
    >
      <ToggleButton value="description">Description</ToggleButton>
      <ToggleButton value="technologies">Technologies</ToggleButton>
      <ToggleButton value="link">Link</ToggleButton>
    </ToggleButtonGroup>
  );
}
