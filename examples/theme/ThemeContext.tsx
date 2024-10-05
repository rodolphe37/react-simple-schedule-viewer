import {
  createContext,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useState,
} from "react";

export type Theme = "dark" | "light";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
} | null>(null);

const getInitialTheme = (): Theme => {
  const storedPrefs = localStorage.getItem("theme");

  if (storedPrefs === "light" || storedPrefs === "dark") {
    return storedPrefs;
  }

  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

  if (userMedia.matches) {
    return "dark";
  }

  return "light";
};

const rawSetTheme = (theme: Theme) => {
  const root = window.document.documentElement;
  const isDark = theme === "dark";

  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(theme);

  localStorage.setItem("theme", theme);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useLayoutEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
