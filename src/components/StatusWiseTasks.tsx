import { Container, Flex, Group, Title } from "@mantine/core";
import FilteredTable from "./FilteredTable";
import { useManageTasks } from "./useManageTasks";
import LinkButton from "./LinkButton";

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
          <Title order={1}>Tasks By Status</Title>
          <FilteredTable tasks={taskManager.tasks} />
          <Group justify="flex-end" mt="md">
            <LinkButton
              name="Back to Tasks"
              to="/"
            ></LinkButton>
          </Group>
        </Flex>
      </Container>
    </>
  );
};

export default StatusWiseTasks;
