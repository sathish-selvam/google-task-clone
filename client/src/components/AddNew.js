import React, { useState } from "react";

export default function AddNew(props) {
  const [addInput, setAddInput] = useState("");

  function hanldeKeyDown(e) {
    if (e.code === "Enter") {
      props.newListData({
        title: addInput,
        id: Math.floor(Math.random() * 10000),
      });
      closeAdding();
    }
  }

  function closeAdding() {
    props.captureDelete();
  }

  return (
    <section className="controls">
      <i className="far fa-circle"></i>
      <input style={{ flex: 1 }} type="text" name="add" onKeyDown={(e) => hanldeKeyDown(e)} onChange={(e) => setAddInput(e.target.value)} value={addInput} placeholder="Title" />
      <i className="delete fas fa-ban" onClick={closeAdding}></i>
    </section>
  );
}
