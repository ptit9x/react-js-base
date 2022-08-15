import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { doLogin } from "../../pages/Login/Login.thunks";
import { PATH } from "../../constants/paths";
import { useAppDispatch } from "../../store";
import "./Login.scss";

const Login = () => {
  const { error, loading } = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = ({ email, password }) => {
    dispatch(doLogin({ email, password }))
      .unwrap()
      .then(() => {
        navigate(PATH.HOME);
      });
  };

  return <div className="login">{t("login-layout")}</div>;
};
export default Login;
