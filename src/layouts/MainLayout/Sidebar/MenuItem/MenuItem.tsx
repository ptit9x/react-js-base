import React, { useState } from "react";
import MenuItemComponent from "./MenuItemComponent";
import { useWindowSize } from "src/hooks/useWindowSize";
import { BREAKPOINT } from "src/constants/styles";
import {
  Collapse,
  Divider,
  List,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  name: string;
  link?: string;
  icon?: string;
  items?: any[];
  handleOpenSidebar(value: boolean): void;
}

const MenuItem = ({
  name,
  link,
  icon,
  items,
  handleOpenSidebar
}: MenuItemProps) => {
  const isExpandable = items && items.length > 0;
  const [currentWidth] = useWindowSize();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setSubMenuOpen(!subMenuOpen);
    if (link) {
      currentWidth <= BREAKPOINT.XL && handleOpenSidebar(false);
      navigate(link);
    }
  }

  return (
    <>
      <MenuItemComponent link={link} icon={icon} onClick={handleClick}>
        {!!icon && (
          <ListItemIcon>
            <img src={icon} alt="sidebar-icon" width="26px" height="26px" />
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!icon} sx={{ color: "#ccc" }} />
        {isExpandable && !subMenuOpen && ">"}
        {isExpandable && subMenuOpen && "<"}
      </MenuItemComponent>

      {isExpandable ? (
        <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            {items.map((item, index: number) => (
              <MenuItem
                {...item}
                key={index}
                handleOpenSidebar={handleOpenSidebar}
              />
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
  );
};

export default MenuItem;
