import { useTranslation } from "react-i18next";
import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();

  return <div className="home">{t("home-layout")}</div>;
};
export default Home;
