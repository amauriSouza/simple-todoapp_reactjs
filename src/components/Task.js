import React, { Component } from "react";
import TableDefault from "./TableDefault";
import CardDefault from "./CardDefault";
import Form from "./Form";
import { Card, Typography, CardContent } from "@material-ui/core";

class Task extends Component {
  state = {
    tasks: []
  };

  removeTask = index => {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((task, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  renderTable = () => {
    if (this.state.tasks.length > 0) {
      return (
        // <TableDefault
        //   tasksData={this.state.tasks}
        //   removeTask={this.removeTask}
        // />
        <CardDefault
          tasksData={this.state.tasks}
          removeTask={this.removeTask}
        />
      );
    } else
      return (
        <div className="flex-content__center text-color">
          Você não tem nenhuma tarefa!
        </div>
      );
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Tarefas
            </Typography>
            <Form handleSubmit={this.handleSubmit} />
            {this.renderTable()}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Task;
