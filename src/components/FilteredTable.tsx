import { Table } from "@mantine/core";
import TaskCard from "./TaskCard";
import { ITasks } from "../interfaces/ITasks";

function FilteredTable(props: { tasks: ITasks[] }) {
  const filterByStatus = (status: string) =>
    props.tasks.flatMap((task) =>
      task.status === status ? (
        <TaskCard task={task.task} status={task.status} />
      ) : (
        []
      )
    );

  const statuses: string[] = ["To Do", "Doing", "Done"];

  const rows = (
    <Table.Tr>
      {statuses.map((status, index) => (
        <Table.Td key={index} mt={2}>{filterByStatus(status)}</Table.Td>
      ))}
    </Table.Tr>
  );

  return (
    <Table horizontalSpacing="sm" layout={"fixed"}>
      <Table.Thead>
        <Table.Tr>
          {statuses.map((status) => (
            <Table.Th>{status}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default FilteredTable;
