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

  const maxRowCount = Math.max(
    ...statuses.map((status) => filterByStatus(status).length)
  );

  const rows = Array.from({ length: maxRowCount }, (_, rowIndex) => (
    <Table.Tr key={rowIndex} style={{ border: "none" }}>
      {statuses.map((status, colIndex) => (
        <Table.Td key={colIndex} mt={2}>
          {filterByStatus(status)[rowIndex] || null}
        </Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <Table horizontalSpacing="sm" layout={"fixed"}>
      <Table.Thead>
        <Table.Tr>
          {statuses.map((status, index) => (
            <Table.Th key={index}>{status}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default FilteredTable;
