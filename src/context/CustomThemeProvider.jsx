import { createContext, useContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./Themes";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Theme = createContext();

export function CustomTheme({ children }) {
  const [mode, setMode] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches && true
  );

  const theme = useMemo(() => (!mode ? lightTheme : darkTheme), [mode]);

  function handleChange() {
    setMode((prev) => !prev);
  }

  return (
    <Theme.Provider value={{ handleChange }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Theme.Provider>
  );
}

export function useTheme() {
  const context = useContext(Theme);

  return context;
}
