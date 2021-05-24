import React from "react";

const GroupList = ({ groupList, group, onGroupClick }) => {
  return (
    <div className="list-group">
      {groupList.map((g) => (
        <a
          key={g._id ? g._id : -1}
          href="#GroupList"
          className={g === group ? "list-group-item active" : "list-group-item"}
          onClick={() => onGroupClick(g)}
        >
          {g.name}
        </a>
      ))}
    </div>
  );
};

export default GroupList;
