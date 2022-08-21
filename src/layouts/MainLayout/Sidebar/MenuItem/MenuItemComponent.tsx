import { ListItem as MuiListItem } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

export interface MenuItemComponentProps {
  link?: string | null;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  icon?: string;
}

const ListItem = styled(MuiListItem)``;

const MenuItemComponent = ({
  onClick,
  icon,
  link,
  children
}: MenuItemComponentProps) => {
  if (!link || typeof link !== "string") {
    return (
      <ListItem
        //@ts-ignore
        button
        sx={{ padding: "12px 16px" }}
        children={children}
        onClick={onClick}
      />
    );
  }

  return (
    <ListItem
      //@ts-ignore
      button
      sx={icon ? { padding: "12px 16px" } : {}}
      children={children}
      onClick={onClick}
    />
  );
};

export default MenuItemComponent;
