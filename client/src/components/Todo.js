import React, { useState } from "react";

function Todo(props) {
  let list = props.list;
  const [hover, setHover] = useState(false);
  const [listOver, setListOver] = useState(false);
  function handleOnHover() {
    setHover(true);
  }
  function handleOnLeave() {
    setHover(false);
  }

  function handleClick(id) {
    props.captureClick(id);
    setHover(false);
    setListOver(false);
  }

  return (
    <>
      {!list.isCompleted && (
        <li className={listOver ? "list-item-hover" : "list-item"} onMouseOver={() => setListOver(true)} onMouseLeave={() => setListOver(false)}>
          <i style={{ cursor: "pointer" }} onMouseOver={handleOnHover} onMouseLeave={handleOnLeave} className={hover ? "tick fas fa-check" : "far fa-circle"} onClick={() => handleClick(list._id)}></i>
          <p>{list.title}</p>
          {listOver && <i className="three-dot fas fa-ellipsis-v"></i>}
        </li>
      )}
    </>
  );
}

export default Todo;
