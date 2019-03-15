import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";


const TableBodyDefault = props => {
  const rows = props.tasksData.map((row, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.description}</TableCell>
        <TableCell>{row.dtInitial}</TableCell>
        <TableCell>{row.dtEnd}</TableCell>
        <TableCell>
          <Icon onClick={() => props.removeTask(index)}>delete</Icon>
        </TableCell>
      </TableRow>
    );
  });
  return <TableBody>{rows}</TableBody>;
};

export default TableBodyDefault;
