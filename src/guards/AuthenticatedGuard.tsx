import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PATH } from "../constants/paths";
import { getToken } from "../utils/auth";

interface Props {
  children: ReactNode;
}

const AuthenticatedGuard = ({ children }: Props) => {
  const location = useLocation();

  return getToken() ? (
    <>{children}</>
  ) : (
    <Navigate to={PATH.LOGIN} replace state={{ from: location }} />
  );
};

export default AuthenticatedGuard;
