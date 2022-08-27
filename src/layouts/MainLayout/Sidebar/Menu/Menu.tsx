import { useTranslation } from "react-i18next";
import icon_contract from "src/assets/icons/icon-contract.svg";
import icon_dapp from "src/assets/icons/icon-dapp.svg";
import icon_dashboard from "src/assets/icons/icon-dashboard.svg";
import icon_logout from "src/assets/icons/icon-logout.svg";
import icon_nft from "src/assets/icons/icon-nft.svg";
import icon_setting from "src/assets/icons/icon-setting.svg";

import MenuItem from "./MenuItem";

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      name: t("dashboard"),
      link: "/wallet/dashboard",
      icon: icon_dashboard
    },
    {
      name: t("nft-manager"),
      link: "/wallet/nft",
      icon: icon_nft
    },
    {
      name: t("dapps"),
      link: "/wallet/dapps",
      icon: icon_dapp
    },
    {
      name: t("contract"),
      icon: icon_contract,
      subMenuItems: [
        {
          name: t("deploy-contract"),
          link: "/wallet/deploy"
        },
        {
          name: t("interact-contract"),
          link: "/wallet/interact"
        }
      ]
    },
    {
      name: t("settings"),
      link: "/wallet/settings",
      icon: icon_setting,
      hasDivider: true
    },
    {
      name: t("logout"),
      link: "",
      icon: icon_logout
    }
  ];

  return (
    <>
      {menuItems.map((item, i) => (
        <MenuItem {...item} key={i} />
      ))}
    </>
  );
};

export default Menu;
