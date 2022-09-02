import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import icon_logo from "src/assets/icons/logo-mew.svg";
import { menuItems } from "src/constants/sidebarMenu";
import { BREAKPOINT } from "src/constants/styles";
import { usePrevious } from "src/hooks/usePrevious";
import { useWindowSize } from "src/hooks/useWindowSize";
import { useAppDispatch, useAppSelector } from "src/store";
import theme from "src/theme";

import { onCloseSidebar } from "../MainLayout.reducer";
import AccountCard from "./AccountCard/AccountCard";
import ActionButtons from "./ActionButtons/ActionButtons";
import MenuItem from "./MenuItem/MenuItem";
import { AccountInfo, Drawer, List, LogoWrapper } from "./Sidebar.styled";

enum Variant {
  Temporary = "temporary",
  Permanent = "permanent"
}

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const [currentWidth] = useWindowSize();
  const isOpenSidebar = useAppSelector(state => state.mainLayout.isOpenSidebar);
  const [drawerVariant, setDrawerVariant] = useState(Variant.Temporary);
  const oldVariant = usePrevious(drawerVariant);

  useLayoutEffect(() => {
    if (currentWidth <= BREAKPOINT.XL) {
      setDrawerVariant(Variant.Temporary);

      if (oldVariant === Variant.Permanent) {
        dispatch(onCloseSidebar());
      }
    } else {
      setDrawerVariant(Variant.Permanent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWidth]);

  return (
    <Drawer
      anchor={"left"}
      variant={drawerVariant}
      open={isOpenSidebar}
      onClose={() => dispatch(onCloseSidebar())}
    >
      <AccountInfo>
        <LogoWrapper>
          <img src={icon_logo} alt="sidebar-logo" width="120px" />
          {drawerVariant === Variant.Temporary && (
            <IconButton onClick={() => dispatch(onCloseSidebar())}>
              <CloseIcon htmlColor={theme.palette.common.white} />
            </IconButton>
          )}
        </LogoWrapper>

        <AccountCard />
      </AccountInfo>

      <List disablePadding>
        <ActionButtons />

        {menuItems.map((item, i) => (
          <MenuItem {...item} key={i} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
