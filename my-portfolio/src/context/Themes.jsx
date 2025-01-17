import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FFFAEC" },
    secondary: { main: "#F5ECD5" },
    text: {
      primary: "#578E7E",
      secondary: "#3D3D3D",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6F4E37" },
    secondary: { main: "#A67B5B" },
    background: {
      default: "#578E7E",
      paperFade: "#578E7E77",
    },
    text: {
      primary: "#FED8B1",
      secondary: "#ECB176",
    },
  },
});

export { lightTheme, darkTheme };
