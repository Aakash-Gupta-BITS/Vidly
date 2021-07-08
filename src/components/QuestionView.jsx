import Done from "./common/Done";

const QuestionView = ({ List, onDoneClick }) => {
  const badgeClass = (difficulty) => {
    if (difficulty === "Easy") return "badge badge-primary";
    if (difficulty === "Medium") return "badge badge-warning";
    return "badge badge-danger";
  };

  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Accuracy</th>
          <th>Difficulty</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {List.map((q) => (
          <tr key={q.id}>
            <td>{q.id}</td>
            <td>
              <a href={q.link} target="none">
                {q.title}
              </a>
            </td>
            <td>{q.accuracy}</td>
            <td>
              <span class={badgeClass(q.difficulty)}>{q.difficulty}</span>
            </td>
            <td>
              <Done isDone={false} onClick={() => onDoneClick()} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionView;
