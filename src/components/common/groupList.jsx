import React from "react";

const GroupList = ({ groupList, group, onGroupClick }) => {
  return (
    <div className="list-group">
      {groupList.map((g) => (
        <li
          key={g._id ? g._id : -1}
          href="#GroupList"
          className={g === group ? "list-group-item active" : "list-group-item"}
          onClick={() => onGroupClick(g)}
          style={{cursor:'pointer'}}
        >
          {g.name}
        </li>
      ))}
    </div>
  );
};

export default GroupList;
