import { createContext } from "react";

const defaultValue: {
  currentTheme: string;
  toggleTheme: (theme: string) => void;
} = {
  currentTheme: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
