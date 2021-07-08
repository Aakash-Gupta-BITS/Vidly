const Done = ({ isDone, onClick }) => {
  let classes = "fa fa-";
  if (isDone) classes += "check .text-success";
  else classes += "times .text-danger";
  return (
    <i
      style={{ cursor: "pointer", color: isDone ? "green" : "red" }}
      className={classes}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default Done;
