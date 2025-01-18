import { createContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./Themes";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Theme = createContext();

export function CustomTheme({ children }) {
  const [mode, setMode] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches && "dark"
  );

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <Theme.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Theme.Provider>
  );
}
