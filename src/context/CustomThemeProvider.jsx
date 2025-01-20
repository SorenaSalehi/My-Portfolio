import { createContext, useContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./Themes";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Theme = createContext();

export function CustomTheme({ children }) {
  const [mode, setMode] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  const theme = useMemo(() => (!mode ? lightTheme : darkTheme), [mode]);
  function handleChange() {
    setMode((prev) => !prev);
  }

  return (
    <Theme.Provider value={{ mode, theme, handleChange }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Theme.Provider>
  );
}

export function useCustomTheme() {
  const context = useContext(Theme);

  if (!context) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }

  return context;
}
