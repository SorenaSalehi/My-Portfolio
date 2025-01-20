import React, { lazy } from "react";
import { CustomTheme } from "./context/CustomThemeProvider";
const Home = lazy(() => import("./components/Home"));

export default function App() {
  return (
    <CustomTheme>
      <Home />
    </CustomTheme>
  );
}
