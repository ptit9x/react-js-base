import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return <div>{t("sidebar")}</div>;
};
export default Sidebar;
