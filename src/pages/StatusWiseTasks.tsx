import { Container, Flex, Group, Title } from "@mantine/core";
import FilteredTable from "../components/FilteredTable";
import { useManageTasks } from "../hooks/useManageTasks";
import LinkButton from "../components/LinkButton";
import ThemeSwitch from "../components/ThemeSwitch";

const StatusWiseTasks = () => {
  const taskManager = useManageTasks();
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
          <FilteredTable tasks={taskManager.tasks} />
          <Group justify="flex-end" mt="md">
            <LinkButton name="Back to Tasks" to="/"></LinkButton>
          </Group>
        </Flex>
      </Container>
    </>
  );
};

export default StatusWiseTasks;
