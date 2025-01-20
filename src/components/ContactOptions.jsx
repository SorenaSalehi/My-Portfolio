import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import ContactBtn from "./ContactBtn";
import {
  Email,
  GitHub,
  LinkedIn,
  SocialDistance,
  WhatsApp,
} from "@mui/icons-material";
import { useCustomTheme } from "../context/CustomThemeProvider";

const actions = [
  {
    icon: <Email />,
    name: "Email",
    href: "mailto:itssorenadev@gmail.com",
    action: (e) => {
      e.preventDefault();
      window.location.href = "mailto:itssorenadev@gmail.com";
    },
  },
  {
    icon: <LinkedIn />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sorenasalehi/",
    action: () =>
      window.open("https://www.linkedin.com/in/sorenasalehi/", "_blank"),
  },
  {
    icon: <GitHub />,
    name: "GitHub",
    href: "https://github.com/SorenaSalehi",
    action: () => window.open("https://github.com/SorenaSalehi", "_blank"),
  },
  {
    icon: <WhatsApp />,
    name: "WhatsApp",
    href: "https://wa.me/+905399676995",
    action: () => window.open("https://wa.me/+905399676995", "_blank"),
  },
];

export default function ContactOptions() {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const {
    isContactOptionOpen,

    handleOpenContactOption,
    handleCloseContactOption,
  } = useCustomTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "clamp(0.5rem,1vh,2rem)",
        right: "3vw",
        zIndex: 1000,
        "& .MuiBackdrop-root": {
          color: "#fff",
          zIndex: 999,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      {/* <Backdrop
        open={open}
        sx={{
          color: "#fff",
          zIndex: 999,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        onClick={handleClose}
      /> */}
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          "& .MuiFab-primary": {
            bgcolor: "transparent",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "transparent",
            },
          },
          "& .MuiSpeedDial-fab": {
            width: "auto",
            height: "auto",
          },
        }}
        icon={<ContactBtn />}
        onClose={handleCloseContactOption}
        onOpen={handleOpenContactOption}
        open={isContactOptionOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(e) => {
              action.action(e);
              handleCloseContactOption();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
