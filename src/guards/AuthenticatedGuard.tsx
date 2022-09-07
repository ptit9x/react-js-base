import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PATH } from "../constants/paths";
import { useAppSelector } from "../store";

interface Props {
  children: ReactNode;
}

const AuthenticatedGuard = ({ children }: Props) => {
  const location = useLocation();
  const wallet = useAppSelector(state => state.app.wallet);
  return wallet.getAddress() ? (
    <>{children}</>
  ) : (
    <Navigate to={PATH.ACCESS_WALLET} replace state={{ from: location }} />
  );
};

export default AuthenticatedGuard;
