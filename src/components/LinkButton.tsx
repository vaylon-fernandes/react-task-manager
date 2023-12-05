import { Group } from "@mantine/core";
import { NavLink } from "react-router-dom";

const LinkButton = (props: { name: string; to: string }) => {
  return (
    <Group justify="flex-end" mt="md">
      <NavLink
        className="no-underline bg-blue-500 dark:bg-big-stone-500 text-sm font-medium p-2 text-white rounded-md"
        to={props.to}
      >
        {props.name}
      </NavLink>
    </Group>
  );
};

export default LinkButton;
