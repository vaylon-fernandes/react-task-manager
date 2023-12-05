import {
  Container,
  Button,
  Flex,
  Title,
  Modal,
  TextInput,
  Group,
  Select,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
// import { useState } from "react";
import { ITasks } from "../interfaces/ITasks";
import TaskTable from "./Tasktable";
import { useManageTasks } from "./useManageTasks";
import ThemeSwitch from "./ThemeSwitch";
import LinkButton from "./LinkButton";
// import classes from "../SelectInput.module.css";

export const TaskManager = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      task: "",
      status: "",
    },
  });

  // const [tasks, setTasks] = useState<ITasks[]>([]);
  const taskManager = useManageTasks();

  return (
    <div className="">
      <Container mt={12}>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Flex
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Title order={1}>Task Manager</Title> <ThemeSwitch />
          </Flex>

          <Modal.Root opened={opened} onClose={close} centered>
            <Modal.Overlay backgroundOpacity={0.35} blur={2} />
            <Modal.Content>
              <Modal.Header className=" dark:bg-big-stone-800">
                <Modal.Title className="font-semibold text-lg">Add Task</Modal.Title>
                <Modal.CloseButton />
              </Modal.Header>
              <Modal.Body className="dark:bg-big-stone-800">
                <form
                  onSubmit={form.onSubmit((values) => {
                    console.log(values);
                    const newTask: ITasks = {
                      task: values.task,
                      status: values.status,
                    };

                    // setTasks((prevTasks) => [...prevTasks, newTask]);
                    taskManager.addTask(newTask);
                    close();
                  })}
                >
                  <TextInput
                    data-autofocus
                    label="Task"
                    placeholder="Task"
                    {...form.getInputProps("task")}
                  />
                  <Select
                    label="Status"
                    placeholder="Pick value"
                    data={["To Do", "Doing", "Done"]}
                    defaultValue="Doing"
                    allowDeselect={false}
                    {...form.getInputProps("status")}
                  />
                  <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                  </Group>
                </form>
              </Modal.Body>
            </Modal.Content>
          </Modal.Root>
          <Button onClick={open} className="bg-blue-500 dark:bg-big-stone-500">Add Task</Button>
          {/* table */}
          <Box maw={800}>
            <TaskTable tasks={taskManager.tasks}></TaskTable>
          </Box>
          {taskManager.tasks.length !== 0 && (
            <LinkButton to="/status-wise-tasks" name="Task By Status" />
          )}
        </Flex>
      </Container>
    </div>
  );
};
