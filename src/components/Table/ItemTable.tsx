import React from "react";
import { TableCellCus } from "./Table.styled";

interface ItemTableProps {
  column: any;
  value: any;
}
function ItemTable({ column, value }: ItemTableProps) {
  return (
    <TableCellCus key={column.id} align={column.align}>
      {column.format && typeof value === "number"
        ? column.format(value)
        : value}
    </TableCellCus>
  );
}

export default ItemTable;
