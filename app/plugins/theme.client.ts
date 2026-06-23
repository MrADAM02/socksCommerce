// app/plugins/theme.client.ts
//
// Runs before paint to set the theme class on <html>, preventing
// any flash of the wrong theme (FOUC). Also keeps tabs in sync.

import { useTheme } from "~~/composables/useTheme";

export default defineNuxtPlugin(() => {
  const { theme, applyTheme } = useTheme();

  function resolveInitialTheme(): "light" | "dark" {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;

    // Fall back to OS-level preference if user hasn't chosen explicitly
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  }

  // Apply immediately on client init (this plugin runs before app mount)
  applyTheme(resolveInitialTheme());

  // Keep in sync if theme is changed in another browser tab
  window.addEventListener("storage", (event) => {
    if (
      event.key === "theme" &&
      (event.newValue === "light" || event.newValue === "dark")
    ) {
      applyTheme(event.newValue);
    }
  });

  // Optional: follow OS theme changes live, only if user never explicitly chose
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", (event) => {
    const userHasChosen = localStorage.getItem("theme");
    if (!userHasChosen) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
});
