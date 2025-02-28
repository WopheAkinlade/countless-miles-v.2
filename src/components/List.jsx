import React from "react";

const List = ({ listItems, listHeader, noListStyle }) => {
  return (
    <ul
      style={{
        listStyle: noListStyle ? "none" : "initial",
      }}
    >
      {listHeader && <li className="listHeader"> Hello </li>}
      {listItems.map((listItem, index) => (
        <li>{listItem}</li>
      ))}
    </ul>
  );
};

export default List;
