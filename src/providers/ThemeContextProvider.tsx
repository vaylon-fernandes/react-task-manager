import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeContextProvider: ({
  children,
}: {
  children: ReactNode;
}) => JSX.Element = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = (newTheme: string) => {
    // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "light") document.body.classList.remove("dark");
    else document.body.classList.add("dark");
    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
