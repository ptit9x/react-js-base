import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <p>{t("sidebar")}</p>
      <NavLink to="/wallet/dashboard">Dashboard</NavLink>
      <NavLink to="/wallet/nft">NFT</NavLink>
      <NavLink to="/wallet/dapps">DApps</NavLink>
      <NavLink to="/wallet/deploy">DeployContract</NavLink>
      <NavLink to="/wallet/interact">InteractContract</NavLink>
      <NavLink to="/wallet/settings">Settings</NavLink>
      <NavLink to="/wallet/send-tx">SendToken</NavLink>
      <NavLink to="/wallet/swap">SwapToken</NavLink>
      <NavLink to="/wallet/access">AccessWallet</NavLink>
      <NavLink to="/wallet/create">CreateWallet</NavLink>
    </div>
  );
};
export default Sidebar;
