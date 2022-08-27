import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BREAKPOINT } from "src/constants/styles";
import { useWindowSize } from "src/hooks/useWindowSize";
import { useAppDispatch } from "src/store";
import theme from "src/theme";

import { onCloseSidebar } from "../../MainLayout.reducer";
import { Divider, ListItemButton } from "../Sidebar.styled";

interface MenuItemProps {
  name: string;
  link?: string;
  icon?: string;
  hasDivider?: boolean;
  subMenuItems?: { name: string; link: string }[];
}

const MenuItem = ({
  name,
  link,
  icon,
  subMenuItems,
  hasDivider = false
}: MenuItemProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isExpandable = subMenuItems && subMenuItems.length > 0;
  const [currentWidth] = useWindowSize();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  function handleClick() {
    setSubMenuOpen(!subMenuOpen);
    if (link) {
      navigate(link);
      currentWidth <= BREAKPOINT.XL && dispatch(onCloseSidebar());
    }
  }

  return (
    <>
      {hasDivider && <Divider />}

      <ListItemButton
        isActive={window.location.pathname === link}
        onClick={handleClick}
        sx={
          icon ? { padding: `${theme.spacing(1.5)} ${theme.spacing(3)}` } : {}
        }
      >
        {!!icon && (
          <ListItemIcon sx={{ minWidth: theme.spacing(5) }}>
            <img src={icon} alt="sidebar-icon" width="26px" />
          </ListItemIcon>
        )}

        <ListItemText
          primary={name}
          inset={!icon}
          disableTypography
          sx={{
            color: theme.palette.common.white,
            fontSize: theme.spacing(1.75)
          }}
        />

        {isExpandable &&
          (subMenuOpen ? (
            <ExpandLessIcon htmlColor={theme.palette.common.white} />
          ) : (
            <ExpandMoreIcon htmlColor={theme.palette.common.white} />
          ))}
      </ListItemButton>

      {isExpandable && (
        <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subMenuItems.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default MenuItem;
