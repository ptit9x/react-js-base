import React from "react";
import { TableCellCus } from "./StickyTable.styled";
interface ItemTableProps {
  column: any;
  value: any;
}
function ItemTable({ column, value }: ItemTableProps) {
  return (
    <TableCellCus align={column.align}>
      {column.format && typeof value === "number"
        ? column.format(value)
        : value}
    </TableCellCus>
  );
}

export default ItemTable;
