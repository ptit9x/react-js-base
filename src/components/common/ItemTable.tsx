import React from "react";
import { TableCellCus } from "./DashBoard.styled";

interface ItemTableProps {
  column: any;
  value: any;
}
function ItemTable(props: ItemTableProps) {
  const { column, value } = props;
  return (
    <TableCellCus key={column.id} align={column.align}>
      {column.format && typeof value === "number"
        ? column.format(value)
        : value}
    </TableCellCus>
  );
}

export default ItemTable;
