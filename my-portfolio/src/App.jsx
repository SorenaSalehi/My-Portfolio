import React from "react";
import { CustomTheme } from "./context/CustomThemeProvider";
import Home from "./components/Home";

export default function App() {
  return (
    <CustomTheme>
      <div class="container">
        <Home />
      </div>
    </CustomTheme>
  );
}
