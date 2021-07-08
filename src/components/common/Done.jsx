const Done = ({ isDone, onClick }) => {
  let classes = "fa fa-";
  if (isDone) classes += "check";
  else classes += "times";
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default Done;
