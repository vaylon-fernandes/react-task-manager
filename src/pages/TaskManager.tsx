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
import { useForm, yupResolver } from "@mantine/form";
import TaskTable from "../components/Tasktable";
// import { useManageTasks } from "../hooks/useManageTasks";
import ThemeSwitch from "../components/ThemeSwitch";
import LinkButton from "../components/LinkButton";
import { addTaskSchema } from "../schema/addTaskSchema";
import { useEffect, useState } from "react";
import { ITasks } from "../interfaces/ITasks";
import axios from "../lib/axios";
import { IApiResponse } from "../interfaces/IApiResponse";

export const TaskManager = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      name: "",
      status: "",
    },
    validate: yupResolver(addTaskSchema),
  });
  const getTasks = async () =>
    await axios
      .get<IApiResponse<ITasks[]>>("/ToDoItems")
      .then((res) => setTasks(res.data.data));
  // const taskManager = useManageTasks();
  const [tasks, setTasks] = useState<ITasks[]>([]);
  useEffect(() => {
    // console.log(data);
    getTasks();
    // setTasks(taskManager.tasks);
  }, []);

  const handleSubmit = async (data: ITasks) =>
    await axios.post("/ToDoItems", { ...data }).then((res) => {
      if (res.status === 200) {
        // setTasks([...tasks, res.data.data]);
        getTasks();
        form.reset();
      }
    });

  // const handleSubmit = async (data: ITasks) => await console.log(data);

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
                <Modal.Title className="font-semibold text-lg">
                  Add Task
                </Modal.Title>
                <Modal.CloseButton className="dark:text-white dark:hover:bg-big-stone-600" />
              </Modal.Header>
              <Modal.Body className="dark:bg-big-stone-800">
                <form
                  onSubmit={form.onSubmit((values) => {
                    // taskManager.addTask(values);
                    handleSubmit(values);
                    close();
                    form.reset();
                  })}
                >
                  <TextInput
                    data-autofocus
                    label="Task"
                    placeholder="Task"
                    {...form.getInputProps("name")}
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
          <Button onClick={open} className="bg-blue-500 dark:bg-big-stone-500">
            Add Task
          </Button>
          {/* table */}
          <Box maw={800}>
            <TaskTable tasks={tasks}></TaskTable>
          </Box>
          {tasks.length !== 0 && (
            <LinkButton to="/status-wise-tasks" name="Task By Status" />
          )}
        </Flex>
      </Container>
    </div>
  );
};
