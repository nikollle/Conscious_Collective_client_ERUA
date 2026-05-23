
import React, { JSX } from "react";
import "../../global.css";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";

import { DefaultTheme, ThemeProvider } from "expo-router";

export default function RootLayn(): JSX.Element {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
