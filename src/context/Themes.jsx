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
            secondaryFade: "#EAEDED44",
            backdrop: "#EAEDEDaa",
            header: "#c4d8de",
            headerFade: "rgba(253, 253, 253, 0.74)",
            aboutMe: "#bce4ef",
            card1: "#FFE620",
            card2: "#37D8E1",
        },
        text: {
            primary: "#0f1211",
            secondary: "#085037",
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
            secondaryFade: "#3C3D3766",
            backdrop: "#3C3D37aa",

            header: "#111111",
            headerFade: "rgba(8, 8, 8, 0.74)",

            aboutMe: "#0a120e",

            card1: "#FFE620",
            card2: "#00ADB5",
        },
        text: {
            primary: "#FFFAEC",
            secondary: "#F5ECD5",
        },
    },
});

export { lightTheme, darkTheme };
