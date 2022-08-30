import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PATH } from "../constants/paths";
import { store } from "../store";

interface Props {
  children: ReactNode;
}

const AuthenticatedGuard = ({ children }: Props) => {
  const location = useLocation();
  const { wallet } = store.getState().app;

  return wallet.getAddress() ? (
    <>{children}</>
  ) : (
    <Navigate to={PATH.ACCESS_WALLET} replace state={{ from: location }} />
  );
};

export default AuthenticatedGuard;
