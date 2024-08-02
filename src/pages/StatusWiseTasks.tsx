import { Container, Flex, Group, Title } from "@mantine/core";
import FilteredTable from "../components/FilteredTable";
// import { useManageTasks } from "../hooks/useManageTasks";
import LinkButton from "../components/LinkButton";
import ThemeSwitch from "../components/ThemeSwitch";
import axios from "../lib/axios";
import { useState, useEffect } from "react";
import { ITasks } from "../interfaces/ITasks";

const StatusWiseTasks = () => {
  // const taskManager = useManageTasks();
  const [tasks, setTasks] = useState<ITasks[]>([]);
  useEffect(() => {
    const data = async () =>
      await axios.get("/ToDoItems").then((res) => setTasks(res.data));
    // console.log(data);
    data();
    // setTasks(taskManager.tasks);
  }, []);

  return (
    <>
      <Container mt={12}>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <div className="flex gap-2 items-center">
            <Title order={1}>Tasks By Status</Title> <ThemeSwitch />
          </div>
          <FilteredTable tasks={tasks} />
          <Group justify="flex-end" mt="md">
            <LinkButton name="Back to Tasks" to="/"></LinkButton>
          </Group>
        </Flex>
      </Container>
    </>
  );
};

export default StatusWiseTasks;
