import { useTranslation } from "react-i18next";
import "./Login.scss";

const AccessWallet = () => {
  const { t } = useTranslation();

  return <div className="login">{t("access-wallet-layout")}</div>;
};
export default AccessWallet;
