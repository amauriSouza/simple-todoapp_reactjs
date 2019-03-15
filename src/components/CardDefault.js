import React, { Component } from "react";
import CardBody from "./CardBody";
import Card from "@material-ui/core/Card";

class CardDefault extends Component {
  render() {
    const { tasksData, removeTask } = this.props;
    return (
      <Card>
        <CardBody tasksData={tasksData} removeTask={removeTask}/>
      </Card>
    );
  }
}

export default CardDefault;
