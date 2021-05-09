import React, { Component } from "react";
import Todo from "./Todo";
class TaskListView extends Component {
  hanldeCaptureClick(id) {
    this.props.clickedId(id);
  }

  render() {
    let todo = this.props.list;
    return (
      <ul className="task-list-view">
        {todo.map((item) => (
          <Todo key={item.id} list={item} captureClick={(id) => this.hanldeCaptureClick(id)} />
        ))}
      </ul>
    );
  }
}

export default TaskListView;
