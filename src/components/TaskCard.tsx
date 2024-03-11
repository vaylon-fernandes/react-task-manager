import { Badge, Card, Group, Text } from "@mantine/core";
import { ITasks } from "../interfaces/ITasks";

const TaskCard = (props: ITasks) => {
  const color: {
    [key: string]: string;
    ToDo: string;
    Doing: string;
    Done: string;
  } = { ToDo: "red", Doing: "blue", Done: "green" };
  console.log(color["TODO"]);
  return (
    <div className="">
      <Card
        className="shadow-lg max-sm:p-0 dark:bg-big-stone-700 dark:text-zinc-50"
        radius={"sm"}
        mb={10}
        withBorder
      >
        <Group className="max-sm:p-1" justify={"space-between"}>
          <Text className="max-sm:text-sm font-medium">{props.task}</Text>
          <Badge color={color[props.status.replace(" ", "")]} size="xs">
            {props.status}
          </Badge>
        </Group>
      </Card>
    </div>
  );
};

export default TaskCard;
