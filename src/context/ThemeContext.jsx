import React, { createContext, useState } from "react";

// Create context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // default theme is dark
  const [theme, setTheme] = useState("dark");

  // Toggle between three themes
  const toggleTheme = () => {
    if (theme === "blue") setTheme("dark");
    else if (theme === "dark") setTheme("light");
    else setTheme("blue");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
