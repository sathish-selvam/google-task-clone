import React, { useState } from "react";

function CompletedList(props) {
  let list = props.list;
  const [hover, setHover] = useState(false);

  function handleDeleteCompleted(e, id) {
    e.stopPropagation();
    props.captureDelete(id);
    setHover(false);
  }

  return (
    <ul>
      <li key={list._id} className={hover ? "list-item-hover" : "list-item"} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <i className="tick fas fa-check"></i>
        <del>{list.title}</del>
        {hover && <i className="three-dot fas fa-trash-alt" onClick={(e) => handleDeleteCompleted(e, list._id)}></i>}
      </li>
    </ul>
  );
}

export default CompletedList;
