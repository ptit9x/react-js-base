import icon_contract from "src/assets/icons/icon-contract.svg";
import icon_dapp from "src/assets/icons/icon-dapp.svg";
import icon_dashboard from "src/assets/icons/icon-dashboard.svg";
import icon_logout from "src/assets/icons/icon-logout.svg";
import icon_nft from "src/assets/icons/icon-nft.svg";
import icon_setting from "src/assets/icons/icon-setting.svg";
import icon_menu_buy_sell from "src/assets/icons/icon-menu-buy-sell.svg";
import icon_menu_send from "src/assets/icons/icon-menu-send.svg";
import icon_menu_swap from "src/assets/icons/icon-menu-swap.svg";

export const menuItems = [
  {
    name: "dashboard",
    link: "/wallet/dashboard",
    icon: icon_dashboard
  },
  {
    name: "nft-manager",
    link: "/wallet/nft",
    icon: icon_nft
  },
  {
    name: "dapps",
    link: "/wallet/dapps",
    icon: icon_dapp
  },
  {
    name: "contract",
    icon: icon_contract,
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
    icon: icon_setting,
    hasDivider: true
  },
  {
    name: "logout",
    link: "",
    icon: icon_logout
  }
];

export const actionButtons = [
  {
    icon: icon_menu_buy_sell,
    text: "buy/sell",
    link: ""
  },
  {
    icon: icon_menu_send,
    text: "send",
    link: "/wallet/send-tx"
  },
  {
    icon: icon_menu_swap,
    text: "swap",
    link: "/wallet/swap"
  }
];
