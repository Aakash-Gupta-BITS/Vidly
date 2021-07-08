import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import Done from "./common/Done";

const QuestionView = ({ List, onDoneClick, onSortClick }) => {
  const badgeClass = (difficulty) => {
    if (difficulty === "Easy") return "badge badge-primary";
    if (difficulty === "Medium") return "badge badge-warning";
    return "badge badge-danger";
  };

  const levels = {
    Easy: 0,
    Medium: 1,
    Hard: 2,
  };

  return (
    <>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th
              style={{ cursor: "pointer" }}
              onClick={() => onSortClick((a, b) => a.id - b.id)}
            >
              ID
            </Th>
            <Th
              style={{ cursor: "pointer" }}
              onClick={() =>
                onSortClick((a, b) => a.title.localeCompare(b.title))
              }
            >
              Title
            </Th>
            <Th
              style={{ cursor: "pointer" }}
              onClick={() => onSortClick((a, b) => a.accuracy - b.accuracy)}
            >
              Accuracy
            </Th>
            <Th
              style={{ cursor: "pointer" }}
              onClick={() =>
                onSortClick(
                  (a, b) => levels[a.difficulty] - levels[b.difficulty]
                )
              }
            >
              Difficulty
            </Th>
            <Th
              style={{ cursor: "pointer" }}
              onClick={() => onSortClick((a, b) => a.Done === b.Done)}
            >
              Done
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {List.map((q) => (
            <Tr key={q.id}>
              <Td>{q.id}</Td>
              <Td>
                <a href={q.link} target="none">
                  {q.title}
                </a>
              </Td>
              <Td>{q.accuracy}</Td>
              <Td>
                <span className={badgeClass(q.difficulty)}>{q.difficulty}</span>
              </Td>
              <Td>
                <Done isDone={q.Done} onClick={() => onDoneClick()} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default QuestionView;
