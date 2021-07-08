import Done from "./common/Done";

const QuestionView = ({ questions, onDoneClick }) => {
  return (
    <table className="table">
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
        {questions.map((q) => (
          <tr key={q.id}>
            <td>{q.id}</td>
            <td>{q.title}</td>
            <td>{q.accuracy}</td>
            <td>{q.difficulty}</td>
            <td>
              <Done isDone={false} onClick={() => onClick()} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionView;
