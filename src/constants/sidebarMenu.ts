import CONTRACT_ICON from "src/assets/icons/icon-contract.svg";
import DAPP_ICON from "src/assets/icons/icon-dapp.svg";
import DASHBOARD_ICON from "src/assets/icons/icon-dashboard.svg";
import LOGOUT_ICON from "src/assets/icons/icon-logout.svg";
import NFT_ICON from "src/assets/icons/icon-nft.svg";
import SETTING_ICON from "src/assets/icons/icon-setting.svg";
import BUY_SELL_ICON from "src/assets/icons/icon-menu-buy-sell.svg";
import MENU_SEND_ICON from "src/assets/icons/icon-menu-send.svg";
import SWAP_MENU_ICON from "src/assets/icons/icon-menu-swap.svg";

export const menuItems = [
  {
    name: "dashboard",
    link: "/wallet/dashboard",
    icon: DASHBOARD_ICON
  },
  {
    name: "nft-manager",
    link: "/wallet/nft",
    icon: NFT_ICON
  },
  {
    name: "dapps",
    link: "/wallet/dapps",
    icon: DAPP_ICON
  },
  {
    name: "contract",
    icon: CONTRACT_ICON,
    subMenuItems: [
      {
        name: "deploy-contract",
        link: "/wallet/deploy"
      },
      {
        name: "interact-contract",
        link: "/wallet/interact"
      }
    ]
  },
  {
    name: "settings",
    link: "/wallet/settings",
    icon: SETTING_ICON,
    hasDivider: true
  },
  {
    name: "logout",
    link: "",
    icon: LOGOUT_ICON
  }
];

export const actionButtons = [
  {
    icon: BUY_SELL_ICON,
    text: "buy/sell",
    link: ""
  },
  {
    icon: MENU_SEND_ICON,
    text: "send",
    link: "/wallet/send-tx"
  },
  {
    icon: SWAP_MENU_ICON,
    text: "swap",
    link: "/wallet/swap"
  }
];
