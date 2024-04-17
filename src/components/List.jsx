import React from "react";
import Item from "./Item";

function List({ tasks }) {
  return (
    <ul>
      {tasks.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </ul>
  );
}

export default List;
