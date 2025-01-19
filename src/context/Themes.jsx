import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0D8057" },
    secondary: { main: "#D46A1B" },
    background: {
      default: "#8bc5d5",
      paperFade: "#DFF0E7",
      secondary: "#EAEDED",
      header: "#bce4ef",
      aboutMe: "#bce4ef",
      card1: "#FFE620",
      card2: "#37D8E1",
    },
    text: {
      primary: "#0f1211",
      secondary: "#4B4F47",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#16C47F" },
    secondary: { main: "#FF9D23" },
    background: {
      default: "#0a120e",
      paperFade: "#578E7E77",
      secondary: "#3C3D37",
      header: "#111111",
      aboutMe: "#0a120e",

      card1: "#FFE31A",
      card2: "#00ADB5",
    },
    text: {
      primary: "#FFFAEC",
      secondary: "#F5ECD5",
    },
  },
});

export { lightTheme, darkTheme };
