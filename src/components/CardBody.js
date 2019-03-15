import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardBody = props => {
  const rows = props.tasksData.map((row, index) => {
    return (
        <CardContent key={index}>
          <Typography>{row.name}</Typography>
          <Typography>{row.description}</Typography>
          <Typography>{row.dtInitial}</Typography>
          <Typography>{row.dtEnd}</Typography>
        </CardContent>
    );
  });
  return <CardContent>{rows}</CardContent>;
};

export default CardBody;
