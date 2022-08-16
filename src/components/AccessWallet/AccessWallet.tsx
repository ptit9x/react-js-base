import { useTranslation } from "react-i18next";
import AccessWalletItem from "../AccessWalletItem/AccessWalletItem";

const AccessWallet = () => {
  const { t } = useTranslation();

  return (
    <div>
      <AccessWalletItem />
      <AccessWalletItem />
    </div>
  );
};
export default AccessWallet;
