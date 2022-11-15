import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();

const UpdateThemeContext = React.createContext();
export const useUpdateTheme = () => {
  return useContext(UpdateThemeContext);
};

const getThemeMode = () => {
  if (typeof window.localStorage !== "undefined" && window.localStorage) {
    const storedPref = window.localStorage.getItem("theme");

    if (typeof storedPref === "string") {
      return storedPref;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }

  return "light";
};

export const DarkThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getThemeMode);

  const setAppTheme = (existingTheme) => {
    const root = window.document.documentElement;
    const isDark = existingTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existingTheme);

    localStorage.setItem("theme", existingTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    setAppTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <UpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
