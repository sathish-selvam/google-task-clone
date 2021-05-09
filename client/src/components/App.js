import React, { Component } from "react";
import "../style/style.scss";
import Navigation from "./Navigation";
import AddTask from "./AddTask";
import TaskListView from "./TaskListView";
import Completed from "./Completed";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };

    this.createNewTask = this.createNewTask.bind(this);
  }

  componentDidMount() {
    axios
      .get("/users")
      .then((data) => {
        this.setState({ todo: data.data });
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  handleClick(id) {
    let NewState = this.state.todo.map((li) => {
      if (li._id === id) {
        li.isCompleted = true;
        return li;
      } else return li;
    });

    this.setState({ todo: NewState });
  }

  handleDeletedListRedo(id) {
    let NewState = this.state.todo.map((li) => {
      if (li._id === id) {
        li.isCompleted = false;
        return li;
      } else return li;
    });
    this.setState({ todo: NewState });
  }

  createNewTask(data) {
    this.setState({ todo: [{ ...data, isCompleted: false }, ...this.state.todo] });
  }

  render() {
    return (
      <div className="application">
        <Navigation />
        <AddTask createNewTask={(data) => this.createNewTask(data)} />
        <TaskListView list={this.state.todo} clickedId={(e) => this.handleClick(e)} />
        <Completed todo={this.state.todo} deleteTheList={(id) => this.handleDeletedListRedo(id)} />
      </div>
    );
  }
}

export default App;
