import React from "react";
import { CustomTheme } from "./context/CustomThemeProvider";
import Home from "./components/Home";

export default function App() {
  return (
    <CustomTheme>
      <Home />
    </CustomTheme>
  );
}
