import { ActionIcon } from "@mantine/core";
import { useContext } from "react";
import ThemeContext from "../providers/ThemeContext";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeSwitch = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <ActionIcon
        className="bg-orange-400 dark:bg-gray-600 rounded-3xl"
        onClick={() => toggleTheme(currentTheme === "light" ? "dark" : "light")}
      >
        <IconSun className="dark:hidden" stroke={1.5} />
        <IconMoon className="hidden dark:block" stroke={1.5} />
      </ActionIcon>
    </>
  );
};

export default ThemeSwitch;
