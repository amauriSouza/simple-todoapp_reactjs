import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TableHeaderDefault = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Tarefa</TableCell>
        <TableCell>Descriçao</TableCell>
        <TableCell>Data Inicio</TableCell>
        <TableCell>Data Termino</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderDefault;
