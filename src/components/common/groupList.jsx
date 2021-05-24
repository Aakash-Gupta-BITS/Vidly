import React from "react";

const GroupList = ({ groupList, groupID }) => {
  return (
    <div className="list-group">
      {groupList.map((g) => (
         <a key={g._id} href="#GroupList" className={!g._id && groupID === g._id ? "list-group-item active" : "list-group-item"}>{g.name}</a>
      ))}
    </div>
  );
};

export default GroupList;
