type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function useTheme() {
  // SSR-safe shared state — actual value gets corrected on client via plugin
  const theme = useState<Theme>("theme", () => "light");

  function applyTheme(value: Theme) {
    theme.value = value;

    if (import.meta.client) {
      const html = document.documentElement;
      html.classList.toggle("dark", value === "dark");
      html.style.colorScheme = value;
      localStorage.setItem(STORAGE_KEY, value);
    }
  }

  function toggleTheme() {
    applyTheme(theme.value === "dark" ? "light" : "dark");
  }

  function setTheme(value: Theme) {
    applyTheme(value);
  }

  return { theme, applyTheme, toggleTheme, setTheme };
}
