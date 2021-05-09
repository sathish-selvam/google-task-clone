import React, { Component } from "react";
import AddNew from "./AddNew";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddPanel: false,
    };
  }

  handleAddNewClick = () => {
    this.setState({ openAddPanel: true });
  };

  handleDelete = () => {
    this.setState({ openAddPanel: false });
  };

  handleDataCapture = (data) => {
    this.props.createNewTask(data);
  };

  render() {
    return (
      <div className="add-new-wrapper">
        <section className="add-task" onClick={this.handleAddNewClick}>
          <i className="fas fa-th-list fa-1px "></i>
          <p>Add a task</p>
        </section>
        {this.state.openAddPanel && <AddNew newListData={this.handleDataCapture} captureDelete={this.handleDelete} />}
      </div>
    );
  }
}

export default AddTask;
