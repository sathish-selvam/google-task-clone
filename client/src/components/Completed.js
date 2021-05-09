import React, { Component } from "react";
import CompletedList from "./CompletedList";

class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isPanelOpen: !this.state.isPanelOpen });
  }

  deletedList(id) {
    this.props.deleteTheList(id);
  }

  render() {
    let todo = this.props.todo;
    let completedList = todo.filter((li) => li.isCompleted);
    let styleObj = this.state.isPanelOpen ? { flex: 1 } : {};
    let arrow = this.state.isPanelOpen ? "fas fa-chevron-down" : "fas fa-chevron-up";
    return (
      <div className="complete-wrapper" style={styleObj}>
        <section className="header">
          <p>Completed ({completedList.length})</p>
          <i className={arrow} style={{ cursor: "pointer" }} onClick={this.handleClick}>
            {" "}
          </i>
        </section>
        {this.state.isPanelOpen && (
          <ul>
            {completedList.map((li) => (
              <CompletedList key={li._id} list={li} captureDelete={(id) => this.deletedList(id)} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Completed;
