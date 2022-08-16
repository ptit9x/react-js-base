import { useTranslation } from "react-i18next";
import "./Login.scss";

const Login = () => {
  const { t } = useTranslation();

  return <div className="login">{t("login-layout")}</div>;
};
export default Login;
