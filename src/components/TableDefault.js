import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableHeaderDefault from "../components/TableHeaderDefault";
import TableBodyDefault from "./TableBodyDefault";

class TableDefault extends Component {
  render() {
    const { tasksData, removeTask } = this.props;
    return (
      <Table>
        <TableHeaderDefault />
        <TableBodyDefault tasksData={tasksData} removeTask={removeTask} />
      </Table>
    );
  }
}

export default TableDefault;
