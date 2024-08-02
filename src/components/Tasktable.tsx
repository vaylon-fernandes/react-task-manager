import { Table } from "@mantine/core";
import { ITasks } from "../interfaces/ITasks";

function TaskTable(props: { tasks: ITasks[] }) {
  const rows = props.tasks.map((task, index) => (
    <Table.Tr key={index}>
      <Table.Td>{task.name}</Table.Td>
      <Table.Td>{task.status}</Table.Td>
      <Table.Td>{task.createdAt}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table horizontalSpacing="sm" layout={"fixed"}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Task</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Create At</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default TaskTable;
