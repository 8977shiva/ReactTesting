import React from "react";

const List = (props) => {
  return (
    <div id="list-wrapper">
      <ul>
        {props.item.map((val) => (
          <li className="item" key={val}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;