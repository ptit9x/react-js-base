import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import icon_contract from "src/assets/icons/icon-contract.svg";
import icon_dapp from "src/assets/icons/icon-dapp.svg";
import icon_dashboard from "src/assets/icons/icon-dashboard.svg";
import icon_logout from "src/assets/icons/icon-logout.svg";
import icon_menu_send from "src/assets/icons/icon-menu-send.svg";
import icon_menu_swap from "src/assets/icons/icon-menu-swap.svg";
import icon_nft from "src/assets/icons/icon-nft.svg";
import icon_setting from "src/assets/icons/icon-setting.svg";
import { BREAKPOINT } from "src/constants/styles";
import { useWindowSize } from "src/hooks/useWindowSize";

import MenuItem from "./MenuItem/MenuItem";
import { Drawer, List } from "./Sidebar.styled";

interface SidebarProps {
  sidebarOpen: boolean;
  handleOpenSidebar(value: boolean): void;
}

const Sidebar = ({ sidebarOpen, handleOpenSidebar }: SidebarProps) => {
  const { t } = useTranslation();
  const [currentWidth] = useWindowSize();
  const [drawerVariant, setDrawerVariant] = useState<"temporary" | "permanent">(
    "temporary"
  );

  const menuItems = [
    {
      name: t("Dashboard"),
      link: "/wallet/dashboard",
      icon: icon_dashboard
    },
    {
      name: t("NFT Manager"),
      link: "/wallet/nft",
      icon: icon_nft
    },
    {
      name: t("DApps"),
      link: "/wallet/dapps",
      icon: icon_dapp
    },
    {
      name: t("Contract"),
      icon: icon_contract,
      items: [
        {
          name: t("Deploy Contract"),
          link: "/wallet/deploy"
        },
        {
          name: t("Interact Contract"),
          link: "/wallet/interact"
        }
      ]
    },
    {
      name: t("Settings"),
      link: "/wallet/settings",
      icon: icon_setting
    },
    {
      name: t("Logout"),
      link: "",
      icon: icon_logout
    },
    {
      name: t("Send Token"),
      link: "/wallet/send-tx",
      icon: icon_menu_send
    },
    {
      name: t("Swap Token"),
      link: "/wallet/swap",
      icon: icon_menu_swap
    }
  ];

  useLayoutEffect(() => {
    if (sidebarOpen && currentWidth <= BREAKPOINT.XL) {
      setDrawerVariant("temporary");
      handleOpenSidebar(false);
    } else if (currentWidth > BREAKPOINT.XL) {
      setDrawerVariant("permanent");
      if (!sidebarOpen) {
        handleOpenSidebar(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWidth]);

  return (
    <Drawer
      anchor={"left"}
      variant={drawerVariant}
      open={sidebarOpen}
      onClose={() => handleOpenSidebar(false)}
    >
      <List disablePadding>
        {menuItems.map((item, index) => (
          <MenuItem
            {...item}
            handleOpenSidebar={handleOpenSidebar}
            key={index}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
